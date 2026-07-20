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
          src="https://cdn.poehali.dev/projects/c1ddd35b-7831-4583-9ede-f928d7709396/files/a05d7ba7-149e-4c54-af20-52b544a4d27d.jpg"
          alt="Автомобиль из Японии"
          className="w-full h-full object-cover brightness-125"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">

        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 font-medium">ПРО100Авто</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Проверенный партнёр по подбору автомобилей из-за рубежа
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="https://vk.ru/club237696604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border border-white px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
          >
            Наш ВКонтакте
          </a>
          <a
            href="https://t.me/pro100auto23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            Наш Telegram
          </a>
          <a
            href="https://max.ru/join/Qurnyz0wT4djkRqd3ODo0mXWHA88VsZn4iac0BHvFGo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            Наш MAX
          </a>

        </div>
      </div>
    </div>
  );
}