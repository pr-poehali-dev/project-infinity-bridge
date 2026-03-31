"""Приём заявок на юридическую консультацию"""
import json
import os


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

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"success": True, "id": row[0]}, ensure_ascii=False),
    }
