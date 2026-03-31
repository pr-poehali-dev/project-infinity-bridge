export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/88cbbde4-8bf8-4bed-a24a-44e23111287b/files/5ec0717c-da6a-4157-8fe1-db903e2b38c3.jpg"
          alt="Law firm office"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-blue-500" id="services">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-blue-950 leading-tight">
          Более 15 лет на рынке. Сотни выигранных дел и довольных клиентов — от предпринимателей до крупного бизнеса. Мы решаем задачи, от которых другие отказываются.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-blue-800 text-base">
          {[
            "Банкротство физических и юридических лиц",
            "Семейное право",
            "Земельное право",
            "Корпоративное право",
            "Защита прав должников",
            "Защита прав потребителей",
            "Трудовое право",
            "Иные гражданские споры",
            "Административные споры",
          ].map((service) => (
            <div key={service} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              {service}
            </div>
          ))}
        </div>
        <button className="bg-blue-700 text-white border border-blue-700 px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-blue-700 cursor-pointer w-fit uppercase tracking-wide">
          Записаться на консультацию
        </button>
      </div>
    </div>
  );
}