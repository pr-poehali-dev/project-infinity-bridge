import { useState } from "react";
import func2url from "../../backend/func2url.json";

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url.consultation, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Запись на приём</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
          Получите бесплатную<br />консультацию
        </h2>
        <p className="text-neutral-500 mb-10 text-base">
          Оставьте заявку — мы свяжемся с вами в течение рабочего дня
        </p>

        {status === "success" ? (
          <div className="border border-neutral-200 p-10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-xl font-semibold text-neutral-900 mb-2">Заявка принята!</p>
            <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя *"
              required
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50 placeholder:text-neutral-400"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Телефон *"
              required
              type="tel"
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50 placeholder:text-neutral-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Опишите ваш вопрос (необязательно)"
              rows={4}
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors bg-neutral-50 placeholder:text-neutral-400 resize-none"
            />
            {status === "error" && (
              <p className="text-red-500 text-sm">Ошибка отправки. Пожалуйста, попробуйте ещё раз.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-neutral-900 text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-neutral-700 transition-colors disabled:opacity-50 w-fit cursor-pointer"
            >
              {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
