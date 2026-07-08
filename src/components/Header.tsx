import { Link } from "react-router-dom";
import logo from "@/assets/pro100auto-logo.png";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="ПРО100Авто" className="h-10 w-auto" />
        </Link>
        <nav className="flex gap-8">
          <Link
            to="/how-we-work"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Как мы работаем
          </Link>
          <Link
            to="/contacts"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}