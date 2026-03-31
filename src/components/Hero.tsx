import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/88cbbde4-8bf8-4bed-a24a-44e23111287b/files/467abcc0-dd84-4158-95c3-ceec78b6ff41.jpg"
          alt="Здание суда"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-blue-900/80 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          ЮРИДИЧЕСКАЯ КОМПАНИЯ<br />НА СТРАЖЕ ВАШИХ ПРАВ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Профессиональные юридические услуги для бизнеса и частных лиц. Опыт, результат, надёжность.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-blue-900 transition-all duration-300"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  );
}