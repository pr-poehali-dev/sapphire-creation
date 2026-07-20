import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function KoreaExpertReport() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="px-6 sm:px-12 pt-10 pb-6 border-b border-neutral-800">
        <Link
          to="/korea"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-8 uppercase text-sm tracking-wide w-fit"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </Link>
        <p className="uppercase text-neutral-400 text-xs sm:text-sm tracking-[0.3em] mb-3">ПРО 100 АВТО — Южная Корея</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          ПРИМЕР ОТЧЁТА<br />ЭКСПЕРТА
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-12"
        >
          Перед покупкой наш эксперт в Южной Корее лично осматривает автомобиль: проверяет техническое состояние, кузов, историю обслуживания и юридическую чистоту. Ниже — пример такого отчёта.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <video
            src="https://cdn.poehali.dev/projects/c1ddd35b-7831-4583-9ede-f928d7709396/bucket/a73080ef-6cbf-4186-a54d-33b5d040c287.mp4"
            controls
            className="w-full rounded"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://t.me/pro100auto23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-neutral-200 text-center"
          >
            Оставить заявку в Telegram
          </a>
          <a
            href="tel:+79010087847"
            className="inline-block border border-white text-white px-8 py-4 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black text-center"
          >
            Позвонить нам
          </a>
        </motion.div>
      </div>
    </div>
  );
}
