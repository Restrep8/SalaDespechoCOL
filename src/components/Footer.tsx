import { forwardRef } from "react";
import { Instagram, Facebook } from "lucide-react";
import TRG_LOGO from "../../assets/footer/TRG.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer 
      ref={ref}
      className="fixed bottom-0 left-0 w-full z-0 bg-black text-gray-400 text-[11px] pt-6 pb-12 px-4 md:px-8 border-t border-white/5 text-center space-y-2 md:space-y-3"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="https://www.saladedespecho.mx/wp-content/uploads/2024/07/Sala-de-Despecho-Logo_header.png" 
            alt="Sala de Despecho Logo" 
            className="h-10 sm:h-12 w-auto object-contain select-none mb-2"
            referrerPolicy="no-referrer"
          />
          
          <p className="text-[12px] font-light text-white uppercase tracking-tight mb-2">UNA MARCA OPERADA POR:</p>
          
          <img 
            src={TRG_LOGO} 
            alt="The Rabbit Group" 
            className="h-10 sm:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity select-none"
          />
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right -mt-3 md:mt-0">
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
        <span>COPYRIGHT ® {new Date().getFullYear()} THE RABBIT GROUP.</span>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;