import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Reservations from "./components/Reservations";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Despechometro from "./components/Despechometro";
import Stars from "./components/Stars";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Who from "./components/Who";
import Home from "./components/Home";

export default function App() {
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleResize = () => {
      if (footer) {
        setFooterHeight(footer.offsetHeight);
      }
    };

    // Initial measurement
    handleResize();

    // Resize observer to handle changes dynamically and responsively
    const observer = new ResizeObserver(() => {
      handleResize();
    });
    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 73; // height of sticky navbar
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
      
      {/* Content wrapper with higher z-index and dynamic margin to reveal the fixed footer behind */}
      <div 
        className="relative z-10 bg-[#FFFDF9] shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        {/* NAVIGATION BAR - Matches typography and color requested */}
        <Navbar onNavClick={handleScrollToSection} />

        {/* HERO SECTION - CLINICAL CINEMATIC LOOPS BACKDROP WITH OVERLAYING TRANSPARENT MARQUEE */}
        <Home />

        {/* ¿QUIÉNES SOMOS? DESCRIPTION SECTION */}
        <Who />

        {/* RESERVATIONS COMPONENT - Matches requested image exactly */}
        <Reservations />

        {/* MENU COMPONENT */}
        <Menu />

        {/* STUNNING LOOKBOOK ATMOSPHERE & MULTIMEDIA */}
        <Stars />

        {/* RETHINK DESPECHOMETRO (GAME COMPONENT) */}
        <Despechometro />

        {/* ANONYMOUS GUESTBOOK MURO COMPONENT */}
        <Reviews />

        {/* INSTANTES DE LA SALITA - Photo Carousel below Planifica Tu Visita */}
        <Carrusel />
      </div>

      {/* FOOTER - Positioned fixed behind the wrapper */}
      <Footer ref={footerRef} />

    </div>
  );
}