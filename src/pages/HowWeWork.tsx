import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Вы оставляете заявку — указываете желаемую марку, модель, бюджет и требования. Мы связываемся с вами и уточняем все детали.",
    icon: "ClipboardList",
  },
  {
    number: "02",
    title: "Договор",
    description:
      "Заключаем договор, в котором прописываем все технические характеристики и стоимость желаемого автомобиля. Всё прозрачно и зафиксировано на бумаге.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Подбор и проверка",
    description:
      "Подбираем автомобиль по вашему запросу, лично осматриваем и проверяем его техническое состояние. Только после этого принимаем решение о покупке.",
    icon: "Search",
  },
  {
    number: "04",
    title: "Доставка",
    description:
      "Организуем морскую перевозку, таможенное оформление и все необходимые документы. Держим вас в курсе на каждом этапе.",
    icon: "Ship",
  },
  {
    number: "05",
    title: "Получение",
    description:
      "Автомобиль прибывает к вам полностью готовым к регистрации. Вы получаете машину мечты по честной цене — без лишних хлопот.",
    icon: "KeyRound",
  },
];

export default function HowWeWork() {
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
            КАК МЫ<br />РАБОТАЕМ
          </h1>
        </motion.div>

        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 sm:gap-10 py-8 border-b border-neutral-800 last:border-0"
            >
              <div className="flex-shrink-0 w-12 sm:w-16">
                <span className="text-neutral-600 text-3xl sm:text-4xl font-bold">{step.number}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={step.icon} size={20} className="text-white" />
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">{step.title}</h2>
                </div>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row gap-4"
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