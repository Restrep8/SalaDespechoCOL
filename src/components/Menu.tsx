import menuImg from "@/assets/menu/menu.png";
import { ExternalLink } from "lucide-react";

export default function Menu() {
  return (
    <section id="menu" className="bg-[#FFF3C4] pt-0 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-md sm:max-w-lg mx-auto flex flex-col items-center w-full gap-8">
        <img
          src={menuImg}
          alt="Menú"
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
        
        <a
          href="https://fiweex.com/links/saladedespechocolombia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B31B1B] hover:bg-[#1A1A1A] text-[#FFFDF9] font-sans font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          id="btn-ver-menu"
        >
          <span>Toca aquí</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}