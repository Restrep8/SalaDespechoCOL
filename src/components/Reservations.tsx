import { Sede } from "../types";

export default function Reservations() {
  const sedesList = [
    {
      type: Sede.Poblado,
      label: "POBLADO",
      id: "btn-sede-poblado",
      url: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-poblado/spanish"
    },
    {
      type: Sede.LeMont,
      label: "LE MONT",
      id: "btn-sede-lemont",
      url: "https://www.covermanager.com/reserve/module_restaurant/restaurante-sala-de-despecho-lemont/spanish"
    },
    {
      type: Sede.Cartagena,
      label: "CARTAGENA",
      id: "btn-sede-cartagena",
      url: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-cartagena/spanish"
    },
    {
      type: Sede.Bogota,
      label: "BOGOTÁ",
      id: "btn-sede-bogota",
      url: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-bogota/spanish"
    }
  ];

  return (
    <section id="reservas" className="bg-[#8CE2D6] py-14 sm:py-16 md:py-18 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background patterns representing elegant subtle grid layout */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Retro Title replacement with image */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 flex flex-col items-center">
          <img
            src="https://www.saladedespecho.mx/wp-content/uploads/2025/03/Recurso-1-1536x171.png"
            alt="Reservaciones"
            className="h-14 sm:h-20 md:h-28 w-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
          
          <p className="text-black font-sans text-lg sm:text-2xl font-light mt-8 max-w-2xl mx-auto">
            Por favor selecciona la Sala donde te quieres (des)ahogar.
          </p>
        </div>

        {/* Sedes Buttons linking directly to CoverManager */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
          {sedesList.map((item) => (
            <a
              key={item.type}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                /* Layout & Caja Base */
                flex items-center justify-center box-border rounded-full cursor-pointer
                p-[12px] min-h-[62px] leading-[1.15] text-center
    
                /* Tipografía Original */
                font-bold text-[16px] tracking-normal
    
                /* Tamaños Responsivos del CSS Original */
                w-[172px] 
                max-[1100px]:w-[29vw] max-[1100px]:max-w-[280px]
                max-[560px]:w-[42vw] max-[560px]:max-w-[230px]

                /* Transiciones, Hover y Focus */
                transition-all duration-300 ease-out
                bg-white text-black 
                hover:-translate-y-[3px] 
                hover:shadow-[6px_6px_14px_rgba(0,0,0,0.28)]
                focus:-translate-y-[3px] focus:shadow-[6px_6px_14px_rgba(0,0,0,0.28)]
              "
              id={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}