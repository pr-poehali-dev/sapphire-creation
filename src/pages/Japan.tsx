import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    title: "Заявка и анализ рынка",
    description:
      "Вы описываете желаемый автомобиль — марку, модель, год, комплектацию и бюджет. Мы анализируем японский рынок, изучаем актуальные лоты на аукционах USS, JAA, TAA и других крупнейших площадках Японии.",
    icon: "ClipboardList",
  },
  {
    number: "02",
    title: "Заключение договора",
    description:
      "Фиксируем все технические характеристики и стоимость в договоре. Вы чётко понимаете, за что платите — без скрытых комиссий и неожиданных доплат.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Участие в аукционе",
    description:
      "Наши специалисты лично участвуют в японских аукционах. Мы изучаем историю автомобиля, отчёт о состоянии, данные о пробеге и делаем ставку по согласованной с вами максимальной цене.",
    icon: "Gavel",
  },
  {
    number: "04",
    title: "Осмотр и проверка",
    description:
      "После выкупа фотографируем автомобиль на месте и отправляем вам подробный фотоотчёт — вы видите реальное состояние машины до её отправки в Россию.",
    icon: "Search",
  },
  {
    number: "05",
    title: "Доставка и растаможка",
    description:
      "Организуем морскую перевозку из Японии во Владивосток. Берём на себя все таможенные процедуры, уплату пошлин и оформление документов. Держим вас в курсе на каждом этапе.",
    icon: "Ship",
  },
  {
    number: "06",
    title: "Выдача автомобиля",
    description:
      "Автомобиль прибывает полностью готовым к регистрации в ГИБДД. Передаём вам все документы и ключи. Вы получаете машину мечты — прозрачно, надёжно, по честной цене.",
    icon: "KeyRound",
  },
];

export default function Japan() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/c1ddd35b-7831-4583-9ede-f928d7709396/files/42ca4952-279f-45e1-aa14-8d94b582807f.jpg"
          alt="Автомобили из Японии"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-6 uppercase text-sm tracking-wide w-fit"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
          <p className="uppercase text-neutral-400 text-xs sm:text-sm tracking-[0.3em] mb-3">ПРО100Авто</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            АВТОМОБИЛИ<br />ИЗ ЯПОНИИ
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl text-neutral-300 leading-relaxed"
        >
          Мы лично участвуем в крупнейших японских аукционах и проверяем каждый автомобиль.
          Весь путь — от поиска до ключей в ваших руках — под нашим контролем.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 pb-24">
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 sm:gap-10 py-10 border-b border-neutral-800 last:border-b-0"
            >
              <div className="flex-shrink-0 w-12 sm:w-16">
                <span className="text-neutral-600 text-sm font-mono">{step.number}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={step.icon as Parameters<typeof Icon>[0]["name"]} size={20} className="text-neutral-400" />
                  <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide">{step.title}</h2>
                </div>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
          <Link
            to="/japan/documents"
            className="inline-flex items-center gap-2 border border-neutral-600 text-neutral-300 px-8 py-4 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:border-white hover:text-white text-center justify-center"
          >
            <Icon name="FileText" size={16} />
            Перечень документов
          </Link>
        </motion.div>
      </div>
    </div>
  );
}