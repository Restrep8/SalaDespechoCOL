import zImg from "@/assets/stars/Z.png";
import vImg from "@/assets/stars/V.png";
import mtImg from "@/assets/stars/MT.png";

export default function Stars() {
  return (
    <section id="lookbook" className="bg-[#E5E2D9] pt-8 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Elegant Title matching the brand's editorial style */}
        <div className="text-center mb-6 space-y-2">
          <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light italic tracking-tight leading-[0.95] text-black text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              sala de las <br />
              <span className="brilliant-stars" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>ESTRELLAS</span>
          </h1>
        </div>

        {/* Dynamic divider line under title */}
        <div className="border-t border-black w-full mb-8" />
        
        {/* Triple Vertically Elongated Posters with sharp square corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-0">
          
          <div className="group relative rounded-none overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-[2/3] w-full relative overflow-hidden bg-transparent">
              <img 
                src={vImg} 
                alt="Sala de Despecho - V" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate-[fadeIn_0.5s_ease-out]"
              />
            </div>
          </div>

          <div className="group relative rounded-none overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-[2/3] w-full relative overflow-hidden bg-transparent">
              <img 
                src={zImg} 
                alt="Sala de Despecho - Z" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate-[fadeIn_0.5s_ease-out]"
              />
            </div>
          </div>

          <div className="group relative rounded-none overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-[2/3] w-full relative overflow-hidden bg-transparent">
              <img 
                src={mtImg} 
                alt="Sala de Despecho - MT" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate-[fadeIn_0.5s_ease-out]"
              />
            </div>
          </div>

        </div>

        {/* Elegant bottom line divider matching requested styling */}
        <div className="border-t border-black w-full mt-8" />
      </div>
    </section>
  );
}
