import { useState, useEffect } from "react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to handle initial state if page is already scrolled
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (sectionId: string) => {
    onNavClick(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500">
      <div 
        className={`w-full transition-all duration-500 border-b border-white/10 backdrop-blur-md ${
          isScrolled ? "bg-black py-5 sm:py-3" : "bg-[#1c1d21] py-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand/Logo (Mantenemos el tamaño Extragrande) */}
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => handleItemClick("hero")}
                className="focus:outline-none cursor-pointer text-left flex items-center gap-0.5 sm:gap-1"
                id="brand-logo"
              >
                <img
                  src="https://www.saladedespecho.mx/wp-content/uploads/2024/07/Sala-de-Despecho-Logo_header.png"
                  alt="Sala de Despecho Logo"
                  className="h-8 sm:h-12 md:h-15 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
                <span className="inline-block font-display font-extrabold text-brand-gold text-[9px] sm:text-xs tracking-widest border border-brand-gold/40 px-1.5 py-0.5 sm:px-2.5 rounded-full uppercase">
                  Colombia
                </span>
              </button>
            </div>

            {/* Call to Action Button */}
            <div className="flex items-center">
              <button
                onClick={() => handleItemClick("reservas")}
                className="text-[#88888c] hover:text-white transition-colors font-medium uppercase tracking-widest text-[14px] sm:text-[20px] cursor-pointer"
                id="cta-reservar"
              >
                <span>RESERVA</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS MARQUEE RUNNING BAND FOR PLAYFUL RE-ENGAGEMENT, INTEGRATED DIRECTLY TO THE NAVBAR */}
      <div className="w-full border-b border-white/10 py-3 overflow-hidden select-none bg-black/10">
        <div className="flex w-max whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-0 text-[10px] sm:text-[11px] font-bold italic tracking-[0.25em] uppercase text-white font-serif">
          <span>✹ EL TEMPLO DEL DESAHOGO ✹ DEJA EL CUENTO Y PIDE UN GUARO ✹ EL AMOR SIEMPRE VUELVE ✹ CANTA A GRITO HERIDO{"\u00a0"}</span>
          <span>✹ EL TEMPLO DEL DESAHOGO ✹ DEJA EL CUENTO Y PIDE UN GUARO ✹ EL AMOR SIEMPRE VUELVE ✹ CANTA A GRITO HERIDO{"\u00a0"}</span>
          <span>✹ EL TEMPLO DEL DESAHOGO ✹ DEJA EL CUENTO Y PIDE UN GUARO ✹ EL AMOR SIEMPRE VUELVE ✹ CANTA A GRITO HERIDO{"\u00a0"}</span>
          <span>✹ EL TEMPLO DEL DESAHOGO ✹ DEJA EL CUENTO Y PIDE UN GUARO ✹ EL AMOR SIEMPRE VUELVE ✹ CANTA A GRITO HERIDO{"\u00a0"}</span>
        </div>
      </div>
    </nav>
  );
}