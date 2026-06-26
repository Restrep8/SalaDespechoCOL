import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import local images from assets/images to bypass anti-hotlinking restrictions
import SD_FOTO1 from "../../assets/images/SD_FOTO1-1536x1024.webp";
import SD_FOTO3 from "../../assets/images/SD_FOTO3-1536x1024.webp";
import SD_FOTO5 from "../../assets/images/SD_FOTO5-1536x1024.webp";
import SD_FOTO6 from "../../assets/images/SD_FOTO6-1536x1024.webp";
import SD_FOTO7 from "../../assets/images/SD_FOTO7-1536x1024.webp";
import SD_FOTO8 from "../../assets/images/SD_FOTO8-1536x1024.webp";
import SD_FOTO9 from "../../assets/images/SD_FOTO9-1920x1280.webp";
import SD_FOTO10 from "../../assets/images/SD_FOTO10-1536x1024.webp";
import SD_FOTO11 from "../../assets/images/SD_FOTO11-1536x1024.webp";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Carrusel() {
  const photos = [
    { url: SD_FOTO1 },
    { url: SD_FOTO10 },
    { url: SD_FOTO11 },
    { url: SD_FOTO3 },
    { url: SD_FOTO5 },
    { url: SD_FOTO6 },
    { url: SD_FOTO7 },
    { url: SD_FOTO8 },
    { url: SD_FOTO9 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next/right, -1 = prev/left

  // Automatic change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 4000); // Changes automatically every 4 seconds
    return () => clearInterval(interval);
  }, [photos.length]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="galeria-fotos" className="bg-[#FFFDF9] pt-12 pb-8 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Elegant clean sans-serif bold title matching user request with symmetric spacing */}
        <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-sans font-bold text-[#111111] tracking-tight mb-10 text-center leading-none">
          ¡Así se vive el Despecho!
        </h2>

        {/* Elegant line divider exactly matching requested styling */}
        <div className="border-t border-black w-full max-w-6xl mx-auto mb-8" />
        
        {/* Beautiful panoramic wide image carousel without black borders, padding or extra outlines */}
        <div className="relative w-full max-w-6xl aspect-[1.2/1] md:aspect-[1.6/1] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img 
                key={activeIndex}
                src={photos[activeIndex].url} 
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                alt={`Galería de la Salita - Foto ${activeIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Clean Semitransparent Light Gray circular buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/45 hover:bg-white/65 text-black p-3 sm:p-4 rounded-full shadow-md transition-all duration-200 z-10 hover:scale-105 flex items-center justify-center cursor-pointer"
            aria-label="Anterior foto"
          >
            <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7 text-black/80 stroke-[2.5]" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/45 hover:bg-white/65 text-black p-3 sm:p-4 rounded-full shadow-md transition-all duration-200 z-10 hover:scale-105 flex items-center justify-center cursor-pointer"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7 text-black/80 stroke-[2.5]" />
          </button>
        </div>

        {/* Elegant bottom line divider exactly matching requested styling */}
        <div className="border-t border-black w-full max-w-6xl mx-auto mt-8" />

      </div>
    </section>
  );
}
