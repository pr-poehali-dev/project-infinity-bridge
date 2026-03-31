"""Приём заявок на юридическую консультацию с отправкой email-уведомления"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

NOTIFY_EMAIL = "88452377747@bk.ru"
SMTP_HOST = "smtp.mail.ru"
SMTP_PORT = 465


def send_email(name: str, phone: str, message: str):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка на консультацию от {name}"
    msg["From"] = NOTIFY_EMAIL
    msg["To"] = NOTIFY_EMAIL

    text = f"Новая заявка с сайта\n\nИмя: {name}\nТелефон: {phone}\nСообщение: {message or '—'}"
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px;">
      <h2 style="color: #1a1a1a;">Новая заявка на консультацию</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px 0; color:#666;">Имя</td><td style="padding:8px 0; font-weight:bold;">{name}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">Телефон</td><td style="padding:8px 0; font-weight:bold;">{phone}</td></tr>
        <tr><td style="padding:8px 0; color:#666;">Сообщение</td><td style="padding:8px 0;">{message or '—'}</td></tr>
      </table>
    </div>
    """
    msg.attach(MIMEText(text, "plain", "utf-8"))
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(NOTIFY_EMAIL, os.environ["SMTP_PASSWORD"])
        server.sendmail(NOTIFY_EMAIL, NOTIFY_EMAIL, msg.as_string())


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"}, ensure_ascii=False)}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()
    message = (body.get("message") or "").strip()

    if not name or not phone:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False)}

    import psycopg2
    dsn = os.environ["DATABASE_URL"]
    if "sslmode" not in dsn:
        dsn += ("&" if "?" in dsn else "?") + "sslmode=disable"

    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO t_p95053796_project_infinity_bri.consultations (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
        (name, phone, message),
    )
    row = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()

    send_email(name, phone, message)

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"success": True, "id": row[0]}, ensure_ascii=False),
    }