import SD_FOTO9 from "../../assets/carrusel/SD_FOTO9-1920x1280.webp";

export default function Home() {
  return (
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
  );
}
