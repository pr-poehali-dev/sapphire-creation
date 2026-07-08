import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20 flex-wrap">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="mb-2 sm:mb-3 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Услуги</h3>
                <Link
                  to="/japan"
                  className="inline-block border border-white text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Автомобили из Японии
                </Link>
                <Link
                  to="/china"
                  className="inline-block border border-white text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Автомобили из Китая
                </Link>
                <a
                  href="#korea"
                  className="inline-block border border-white text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base uppercase tracking-wide font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Автомобили из Южной Кореи
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="tel:+79530888954"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >+7 (953) 088-89-54</a>
                <a
                  href="tel:+79010087847"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >+7 (901) 008-78-47 </a>
                <a
                  href="https://t.me/pro100auto23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/pro100auto23?igsh=ZmdnYjhuNmZ6anlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Instagram
                </a>
                <a
                  href="https://vk.ru/club237696604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://max.ru/join/Qurnyz0wT4djkRqd3ODo0mXWHA88VsZn4iac0BHvFGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  MAX
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Адрес</h3>
                <div className="flex items-start gap-2 text-white text-sm sm:text-base">
                  <span className="mt-0.5">📍</span>
                  <span className="leading-snug">
                    Краснодарский край, г. Темрюк,<br />
                    ул. Розы Люксембург, д. 61,<br />
                    ТРК «Калейдоскоп», 3 этаж
                  </span>
                </div>
                <a
                  href="https://yandex.ru/maps/?rtext=~45.033,37.389&rtt=auto&text=Темрюк+ул.+Розы+Люксембург+61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 border border-white text-white px-4 py-2 text-xs uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-fit"
                >
                  <span>🗺️</span> Построить маршрут
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">ПРО100Авто</h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ПРО 100 АВТО</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}