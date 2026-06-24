interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn.poehali.dev/projects/c1ddd35b-7831-4583-9ede-f928d7709396/bucket/14d1eefd-6b9d-410e-b73f-c3b7bf310937.png"
          alt="ПРО 100 АВТО"
          className="h-12 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Как мы работаем
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}