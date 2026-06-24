import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-12 uppercase text-sm tracking-wide"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-neutral-400 text-sm tracking-[0.3em] mb-4">ПРО 100 АВТО</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-16 leading-tight">
            КОНТАКТЫ
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-b border-neutral-800 pb-8"
          >
            <h2 className="uppercase text-neutral-400 text-xs tracking-widest mb-4">Телефоны</h2>
            <div className="flex flex-col gap-3">
              <a href="tel:+79530888954" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Phone" size={18} />
                <span>+7 (953) 088-89-54 — Денис</span>
              </a>
              <a href="tel:+79010087847" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Phone" size={18} />
                <span>+7 (901) 008-78-47 — Артём</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b border-neutral-800 pb-8"
          >
            <h2 className="uppercase text-neutral-400 text-xs tracking-widest mb-4">Соцсети</h2>
            <div className="flex flex-col gap-3">
              <a href="https://t.me/pro100auto23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Send" size={18} />
                <span>Telegram</span>
              </a>
              <a href="https://vk.ru/club237696604" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Users" size={18} />
                <span>ВКонтакте</span>
              </a>
              <a href="https://www.instagram.com/pro100auto23?igsh=ZmdnYjhuNmZ6anlp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Instagram" size={18} />
                <span>Instagram</span>
              </a>
              <a href="https://max.ru/join/Qurnyz0wT4djkRqd3ODo0mXWHA88VsZn4iac0BHvFGo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors text-lg">
                <Icon name="Globe" size={18} />
                <span>MAX</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-2 border-b border-neutral-800 pb-8"
          >
            <h2 className="uppercase text-neutral-400 text-xs tracking-widest mb-4">Адрес офиса</h2>
            <div className="flex items-start gap-3 text-white text-lg mb-6">
              <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
              <span className="leading-relaxed">
                Краснодарский край, г. Темрюк,<br />
                ул. Розы Люксембург, д. 61,<br />
                ТРК «Калейдоскоп», 3 этаж
              </span>
            </div>
            <a
              href="https://yandex.ru/maps/?rtext=~45.033,37.389&rtt=auto&text=Темрюк+ул.+Розы+Люксембург+61"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black"
            >
              <Icon name="Navigation" size={16} />
              Построить маршрут
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
