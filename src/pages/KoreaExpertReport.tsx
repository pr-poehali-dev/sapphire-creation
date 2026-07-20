import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const BASE = "https://cdn.poehali.dev/projects/c1ddd35b-7831-4583-9ede-f928d7709396/bucket/";

const photoIds = [
  "6136679c-abb7-485f-8b15-0942dc203fd8",
  "daf9d25f-eaa5-4256-b5c9-a77b0ae4ad5a",
  "d4c695b6-224a-44ae-bbb5-e2f48d1a7979",
  "993863a1-d686-49d4-8f38-cf4b5f04f2ea",
  "73f04778-5277-45a5-95ac-23c1540da5fb",
  "38615618-f1b1-4ee8-8dad-54d848ebd3f4",
  "809d2ca8-8bb1-4b68-b6e8-77379dc71bdd",
  "9bfec1fe-1634-4a01-9281-3393f9e17ae2",
  "ccb7e1ce-8fea-41e0-911e-01707793f00e",
  "fd5f40be-4f28-4237-96cf-584e53153f7c",
  "89123c64-2a5c-487f-b2b1-493b03e5281e",
  "65a2eac1-d570-4a52-a864-4fdf47b591bc",
  "42ed8d39-235d-4c7c-9572-828b6df09487",
  "2d7ccf4d-406c-4cc2-8d2a-5cb9fe689779",
  "c70cf1f6-e325-4680-9710-c35f5569de52",
  "3e94a308-7e94-4cdb-966f-c0b34ed83d12",
  "a2bbafe7-66bb-4038-857f-3e9838715199",
  "3bddd977-9a00-42b3-9bac-1eec9763bd88",
  "72447ee7-9f19-492e-949f-acb552985f0e",
  "e76a0a4b-ff36-4b3e-bc4b-a88ffea23545",
  "2cf82f70-0552-4e25-aa62-316d3b723f5b",
  "4860c45f-5f0b-4a37-b230-d4b95d3c77ea",
  "6d88b235-813b-4ccf-8e21-dc4475cb9f6c",
  "d48014a9-b3de-4d88-bded-fdfdf12d9a15",
  "5eb8f6d6-9a20-40cb-956d-1df81042583e",
  "0464580d-1023-4af8-ae8a-f607a3ccb91b",
  "6ad02f0f-3434-4766-87af-c46e1df12301",
  "9c35a57b-e64d-4ac3-9307-2635b11022f2",
  "74bd01b5-ecab-4639-80ef-6cf2699b6815",
  "f84b7f97-5db7-484f-bfee-875e4e541368",
  "b9766f12-7574-4c6c-8928-de67f0963c1e",
  "7e316838-5dbd-4aa1-8c07-f22885c3b9d4",
  "d59e99e6-6d06-45ad-98e7-9d3b8ed6d0d6",
  "372da0f1-664a-4bec-b1fa-318bb1c7466a",
  "51c0e0c3-cfc2-4d17-bf3b-7d8c38dc6a5f",
  "b018ff04-71f7-433c-ba41-86ebef92edd7",
  "6bbe2b5c-3b4b-4129-8d50-84e5fcccd778",
  "96df0337-0f46-41f8-9705-a8f25af79635",
  "abee1c1e-9dcc-41d6-be31-e349235456b3",
  "5809987c-c14e-4489-b349-d1b90d77fa0b",
  "2c9939f5-6672-4dcf-8a69-781a26b006a4",
  "edb45708-0e8e-41e2-9b05-c39dd425e454",
  "61e47959-9c9c-4cda-b758-e2836ad7e3b2",
  "189ef4f0-156e-4f2e-96d7-5130da44b006",
  "6b3c09a7-55c0-4d39-930b-81deaeb3a176",
  "ee6cf7d0-6963-46f8-bb84-0b771614ac11",
  "ecd2ae66-0081-4e03-8474-c9bafe8dbf76",
  "39c90fde-e943-446a-b1f5-2223fc2afa16",
  "04d03f20-d06b-430b-b6a3-06811ccf9a8e",
  "8565481d-7169-4951-8120-fe8b1ea13037",
  "045f1590-7c6b-4aa1-b1e0-7510e87299c4",
  "16ed21ab-3516-48aa-a667-6c3811bbd02b",
  "9b641693-55ed-456d-8026-a0a50a94affc",
  "3f81c7e4-add1-441f-99fb-178a287bfe37",
  "074092b7-3712-48c2-a908-c039f3666823",
  "8118cb9b-62f2-4de8-9074-2a698a9f0623",
  "129e0c55-a7cc-4d1f-a50a-a181526929f3",
  "7ff1d96e-2c0d-4653-9aa2-3895fbe88d6d",
  "f585db89-d1a5-4ff3-9add-30af65185559",
  "e88153eb-5fb3-4d24-b7ad-9db42ea8a32d",
  "faf97a3f-f18d-478f-ae8e-b07e24557f92",
  "d6346d53-883e-4c84-a14b-b380ec85ba0c",
  "e3cba1ec-ac8d-4741-91d1-3567e71ab234",
  "a61c278b-340a-48a8-80d4-1e80fae71b99",
  "ec12c839-89cc-431c-ac49-6a59dd2198d0",
  "12d938e9-f9bc-41cc-a95e-e4ce8a0ee647",
  "62a6d73e-df88-44be-a4ba-445d3c055707",
  "6b101ad5-4c57-46d9-8c70-b7c93765b8ef",
  "08fd059d-abf0-4525-8771-18c31f93f783",
  "1def7f1b-6601-4d6e-bff8-d629c56530ba",
  "cfc6de51-c031-4958-8430-2f813ec82c6d",
  "b1a74a2c-b5c1-43f5-b00d-f4e434bf3ac4",
  "6de66cef-f9e4-4b90-9f07-1791256800f6",
  "c46b1807-8fb6-491c-a035-4dd79563b6a1",
  "e5183877-6737-4c19-90bd-b9211aa73f2e",
  "88755317-661e-4d11-9201-b56a86cae224",
  "65dc9dac-3709-448f-b7c3-540499857020",
  "b6651746-5407-4bd5-aa75-22715f0937a3",
  "5867e3a8-996e-4711-a5ef-3f8c32e34a4d",
  "bccef643-479c-437f-9a29-8a77ac35cee5",
  "8fc93b0c-5786-45ea-93fd-fb3236de9b6b",
  "dbdd9a79-4f02-4a4b-b290-94e294949a38",
  "a696c0df-b441-4688-8c5a-974ad6027f34",
  "4de85124-eb74-4913-806a-440135ee733c",
  "ad6ae6c7-5bff-4a92-a086-cb0e440ab42a",
  "cd9c1fdd-c31f-44b5-9a5b-e1ab87b9fc05",
  "3d0c214b-7588-4308-ac3d-e9cd3d6aafd4",
  "ff8deb7b-7a9f-4a8f-b1bc-5d6aee490dac",
  "f5f86bad-e59e-47e9-ba86-d0f747e873eb",
  "6fab51c2-4d6e-4d05-9f95-17aa0a5f9106",
  "6eef4611-694e-41e9-9902-4ea8dcfe9ece",
  "b3d50563-3c4f-48ee-8aca-b1dad366af7f",
  "c1103b32-dac5-4b05-9eb4-679e5f8cbe59",
  "edc1b02a-64f4-4207-a3bf-bd39b187f5c3",
  "9426ac8e-f2bf-4bd7-8ce0-c96230d00590",
  "872fdbfe-10d3-4f06-8285-d23ffa414612",
  "0e39d70b-116b-498f-92ab-1c61a07584b1",
  "e0cec1e9-558b-49d1-8067-be3e2e5c570a",
  "f59ec543-8c3d-42d1-b334-48613002757d",
  "ce042190-6451-4680-bd31-ab8b05c70092",
  "4a5d6b63-c3ef-42c6-949a-a477046b68a0",
  "f4db6f87-4cfc-44ec-aae0-0b92ce6f3308",
  "b6cc9ebc-e306-4d1d-92a1-68a325bdfba8",
  "55585646-7879-4709-954e-c7f8988d3c2a",
  "da4fc822-3261-45ad-9595-a8fbe3423991",
  "38e4b182-0406-44ea-8940-02189e4239cb",
  "a64c02ba-1176-4cfd-9921-206a431f8eb0",
  "637ffc3e-0f24-4b12-bf31-b5d022e73dd1",
  "b170c779-dcac-41cc-8e2e-b139b9fcbb09",
  "f7327d95-467f-4ac4-8269-c2abcd090ba2",
  "16eb4d08-b939-4ef6-88e8-1038736ead89",
  "59207798-e45e-4a86-8700-48e92de98385",
  "6e20251d-8e4e-4bb5-98d2-bd8b8c88baec",
  "b204636a-1dc6-48e8-973e-570450c08430",
  "2578979e-c77f-4796-8bf5-27ee9062f46a",
  "da1daddf-55b3-47f3-b067-f78abc904fb9",
  "aed14fc5-4f63-4332-ba3d-21334eba9b77",
  "dec4c0e3-608a-4a99-855f-d5b6876c2b68",
  "16455d3d-4b75-4d6f-9b39-e4d9618b48d0",
  "4ecf87e7-264f-4792-ae5a-174aee2f83a0",
];

const photos = photoIds.map((id) => `${BASE}${id}.jpg`);

export default function KoreaExpertReport() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

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
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-12"
        >
          Перед покупкой наш эксперт в Южной Корее лично осматривает автомобиль: проверяет техническое состояние, кузов, историю обслуживания и юридическую чистоту. Ниже — пример такого отчёта: фото реального осмотра.
        </motion.p>

        {/* Photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-wide mb-6">
            Фотоотчёт осмотра
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {photos.map((src, index) => (
              <button
                key={src}
                onClick={() => setActiveIndex(index)}
                className="aspect-square overflow-hidden rounded bg-neutral-900 group"
              >
                <img
                  src={src}
                  alt={`Фото отчёта эксперта ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
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

      {/* Lightbox */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-4xl p-2 bg-neutral-950 border-neutral-800">
          <DialogTitle className="sr-only">Фото отчёта эксперта</DialogTitle>
          {activeIndex !== null && (
            <div className="relative flex items-center justify-center">
              <img
                src={photos[activeIndex]}
                alt={`Фото отчёта эксперта ${activeIndex + 1}`}
                className="max-h-[80vh] w-full object-contain rounded"
              />
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {activeIndex + 1} / {photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}