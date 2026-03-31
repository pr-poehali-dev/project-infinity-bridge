export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-blue-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20 flex-wrap">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-300 text-xs sm:text-sm">Услуги</h3>
                {[
                  "Банкротство физических и юридических лиц",
                  "Семейное право",
                  "Земельное право",
                  "Корпоративное право",
                  "Защита прав должников",
                  "Защита прав потребителей",
                  "Трудовое право",
                  "Иные гражданские споры",
                ].map((s) => (
                  <a key={s} href="#services" className="text-white hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                    {s}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-300 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="tel:88452377747"
                  className="text-white hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  8-8452-37-77-47
                </a>
                <a
                  href="tel:+79061530308"
                  className="text-white hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7-906-153-03-08
                </a>
                <p className="text-white text-sm sm:text-base max-w-[200px] leading-snug mt-1">
                  г. Саратов, ул. Большая Казачья, д.59/65, оф.3
                </p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-300 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Консультация
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[7vw] sm:text-[6vw] lg:text-[5vw] leading-[1.1] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight uppercase">
                Морозов<br />и Партнеры
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Морозов и Партнеры</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}