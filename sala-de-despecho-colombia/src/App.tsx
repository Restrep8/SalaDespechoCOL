import { useState } from "react";
import Navbar from "./components/Navbar";
import Reservations from "./components/Reservations";
import Reviews from "./components/Reviews";
import Despechometro from "./components/Despechometro";
import Stars from "./components/Stars";
import Carrusel from "./components/Carrusel";
import SD_FOTO9 from "../assets/images/SD_FOTO9-1920x1280.webp";
import TDRG_LOGO from "../assets/images/TDRG.jpeg";
import { 
  Crown,
  Instagram,
  Facebook
} from "lucide-react";

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#121212] overflow-x-hidden font-sans selection:bg-[#7FE5D9] selection:text-[#121212]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-[#121212] border-2 border-[#C5A059] text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-fadeIn max-w-sm">
          <div className="bg-[#7FE5D9] rounded-full p-1.5 text-[#121212]">
            <Crown className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#7FE5D9] uppercase tracking-wider">Sala de Despecho Medellín</p>
            <p className="text-sm font-extrabold">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* NAVIGATION BAR - Matches typography and color requested */}
      <Navbar onNavClick={handleScrollToSection} />

      {/* HERO SECTION - CLINICAL CINEMATIC LOOPS BACKDROP WITH OVERLAYING TRANSPARENT MARQUEE */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col pt-44 md:pt-56 pb-24 px-0 overflow-hidden bg-black">
        {/* Real Looping Video Background from saladedespecho.mx */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={SD_FOTO9}
            className="min-w-full min-h-full object-cover scale-[1.03] opacity-70"
          >
            <source src="https://www.saladedespecho.mx/wp-content/uploads/2025/03/SDD_RECAP24_Horizontal.webm" type="video/webm" />
            <source src="https://www.saladedespecho.mx/wp-content/uploads/2025/03/SDD_RECAP24_Horizontal.mp4" type="video/mp4" />
          </video>
          {/* Deep professional vignette mask gradient to pull colors in with editorial feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/90 pointer-events-none" />
        </div>

        <div className="flex-grow flex items-center justify-center max-w-4xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8 my-auto">
          {/* Graphic Logo Header Asset */}
          <div className="w-full animate-fadeIn">
            <img 
              src="https://www.saladedespecho.mx/wp-content/uploads/2025/03/Recurso-2.png" 
              alt="Sala de Despecho Original Typography" 
              className="max-h-32 sm:max-h-44 md:max-h-56 lg:max-h-64 w-auto object-contain mx-auto select-none opacity-95 filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ¿QUIÉNES SOMOS? DESCRIPTION SECTION */}
      <section id="quienes-somos" className="bg-[#FFFDF9] pt-8 pb-12 px-4 sm:px-6 lg:px-8 select-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center w-full text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#121212] tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            ¿Quiénes somos?
          </h2>
          <p className="text-black font-sans font-normal text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-center">
            Para crear una experiencia inolvidable y casi canónica, exponemos lo mejor de la cultura pop mexicana:
            <br />
            <br />
            Platillos exquisitos y cantineros. Coctelería deliciosa y divertida. Y una curaduría musical para cantar desde el corazón y (des)ahogar cada una de tus penas.
          </p>
        </div>
      </section>

      {/* RESERVATIONS COMPONENT - Matches requested image exactly */}
      <Reservations onSuccess={() => showToast("¡Su mesa de desahogo ya está apartada con éxito!")} />

      {/* STUNNING LOOKBOOK ATMOSPHERE & MULTIMEDIA */}
      <Stars />

      {/* RETHINK DESPECHOMETRO (GAME COMPONENT) */}
      <Despechometro />

      {/* ANONYMOUS GUESTBOOK MURO COMPONENT */}
      <Reviews />



      {/* INSTANTES DE LA SALITA - Photo Carousel below Planifica Tu Visita */}
      <Carrusel />

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-[11px] pt-6 pb-12 px-4 md:px-8 border-t border-white/5 text-center space-y-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src="https://www.saladedespecho.mx/wp-content/uploads/2024/07/Sala-de-Despecho-Logo_header.png" 
              alt="Sala de Despecho Logo" 
              className="h-10 sm:h-12 w-auto object-contain select-none mb-2"
              referrerPolicy="no-referrer"
            />
            
            <p className="text-[12px] font-light text-white uppercase tracking-tight mb-5">EN COLABORACIÓN CON:</p>
            
            <img 
              src={TDRG_LOGO} 
              alt="The Dirty Rabbit Group" 
              className="h-10 sm:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity select-none"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex gap-4">
              <a href="https://instagram.com/saladedespecho.co" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full text-white transition-all duration-300 hover:scale-100 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/saladedespecho.co" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full text-white transition-all duration-300 hover:scale-100 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-[12px] font-light text-white max-w-6xl mx-auto flex justify-center items-center uppercase tracking-tight">
          <span>COPYRIGHT ® {new Date().getFullYear()} THE DIRTY RABBIT GROUP.</span>
        </div>
      </footer>

    </div>
  );
}
