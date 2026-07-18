import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

export default function Reviews() {
  return (
    <div className="bg-neutral-950 py-16 sm:py-24 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="Star" size={20} className="text-neutral-400" />
          <p className="uppercase text-neutral-400 text-xs sm:text-sm tracking-[0.3em]">Яндекс</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          ОТЗЫВЫ НАШИХ КЛИЕНТОВ
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-neutral-800"
      >
        <iframe
          src="https://yandex.ru/maps-reviews-widget/177580307374?comments"
          width="100%"
          height="600"
          frameBorder="0"
          title="Отзывы клиентов на Яндекс Картах"
          className="w-full block"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center mt-6">
        <a
          href="https://yandex.ru/profile/177580307374?lang=ru&utm_source=copy_link&utm_medium=social&utm_campaign=share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide"
        >
          Все отзывы на Яндексе
          <Icon name="ExternalLink" size={14} />
        </a>
      </div>
    </div>
  );
}
