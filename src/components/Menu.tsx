import menuImg from "@/assets/menu/menu.png";

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
        
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="https://fiweex.com/sistema/img/pdf/CARTA%20ACTUAL%20%20MED%20JUNIO%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B31B1B] hover:bg-[#1A1A1A] text-[#FFFDF9] font-sans font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            id="btn-menu-medellin"
          >
            <span>Medellín</span>
          </a>

          <a
            href="https://fiweex.com/sistema/img/pdf/CTG%20JUNIO%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B31B1B] hover:bg-[#1A1A1A] text-[#FFFDF9] font-sans font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            id="btn-menu-cartagena"
          >
            <span>Cartagena</span>
          </a>

          <a
            href="https://fiweex.com/sistema/img/pdf/CARTA%20BOG%20JUNIO%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B31B1B] hover:bg-[#1A1A1A] text-[#FFFDF9] font-sans font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            id="btn-menu-bogota"
          >
            <span>Bogotá</span>
          </a>
        </div>
      </div>
    </section>
  );
}