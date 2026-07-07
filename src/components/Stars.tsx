import zImg from "@/assets/stars/Z.png";
import vImg from "@/assets/stars/V.png";
import mtImg from "@/assets/stars/MT.png";
import lsdleLogo from "@/assets/stars/LSDLE.png";

export default function Stars() {
  return (
    <section id="lookbook" className="bg-[#E5E2D9] pt-2 sm:pt-4 md:pt-5 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Elegant Title replacement with image */}
        <div className="flex justify-center w-full -mt-6 sm:-mt-10 md:-mt-14 -mb-8 sm:-mb-10 md:-mb-14">
          <img 
            src={lsdleLogo} 
            alt="La Sala de las Estrellas" 
            className="h-44 sm:h-64 md:h-80 max-w-[95%] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
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
