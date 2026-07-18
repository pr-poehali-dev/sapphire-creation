import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const documents = [
  {
    title: "Паспорт гражданина РФ",
    description: "Паспорт для заключения договора и оформления таможенных документов.",
    icon: "BookUser",
  },
  {
    title: "Нотариально заверенная копия паспорта",
    description: "Потребуется для оформления доверенности и юридически значимых документов при покупке.",
    icon: "Stamp",
  },
  {
    title: "ИНН",
    description: "Идентификационный номер налогоплательщика — потребуется при таможенном оформлении.",
    icon: "Hash",
  },
  {
    title: "СНИЛС",
    description: "Страховой номер индивидуального лицевого счёта.",
    icon: "CreditCard",
  },
  {
    title: "Регистрация на сайте ЭПТС",
    description: "Необходима для оформления электронного паспорта транспортного средства на сайте",
    link: "https://elpts.ru/",
    icon: "Globe",
  },
  {
    title: "Скриншот из Госуслуг",
    description: "Подтверждение регистрации и данных на портале Госуслуг.",
    icon: "Smartphone",
  },
  {
    title: "Реквизиты для оплаты через ВТБ",
    description: "Оплата автомобиля производится по инвойсу через банк ВТБ — понадобятся ваши платёжные реквизиты.",
    icon: "Landmark",
  },
];

const info = [
  {
    text: "Все документы предоставляются в оригинале либо в виде чётких копий — уточняйте у менеджера.",
  },
  {
    text: "Если автомобиль оформляется на юридическое лицо — потребуются учредительные документы компании и доверенность.",
  },
  {
    text: "Мы помогаем подготовить полный пакет документов и сопровождаем на каждом этапе.",
  },
];

export default function ChinaDocuments() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="px-6 sm:px-12 pt-10 pb-6 border-b border-neutral-800">
        <Link
          to="/china"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-8 uppercase text-sm tracking-wide w-fit"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </Link>
        <p className="uppercase text-neutral-400 text-xs sm:text-sm tracking-[0.3em] mb-3">ПРО 100 АВТО — Китай</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          ПЕРЕЧЕНЬ<br />ДОКУМЕНТОВ
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-16"
        >
          Для покупки автомобиля из Китая от вас потребуется стандартный пакет документов физического лица.
        </motion.p>

        {/* Documents list */}
        <div className="flex flex-col gap-0 mb-16">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-6 py-8 border-b border-neutral-800 last:border-b-0"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Icon name={doc.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-neutral-400" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold uppercase tracking-wide mb-1">{doc.title}</h2>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {doc.description}
                  {doc.link && (
                    <>
                      {" "}
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-neutral-300 transition-colors duration-300"
                      >
                        {doc.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-neutral-900 border border-neutral-700 p-6 sm:p-8 flex flex-col gap-4 mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Info" size={18} className="text-neutral-400" />
            <span className="uppercase text-neutral-400 text-xs tracking-widest">Важно знать</span>
          </div>
          {info.map((item, index) => (
            <p key={index} className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              — {item.text}
            </p>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://t.me/pro100auto23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-neutral-200 text-center"
          >
            Задать вопрос в Telegram
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
