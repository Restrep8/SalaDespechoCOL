import { MapPin, Clock } from "lucide-react";

interface LocationItem {
  id: string;
  name: string;
  city: string;
  address: string;
  schedule: string;
  mapUrl: string;
  reservationUrl: string;
  embedUrl: string;
}

const LOCATIONS: LocationItem[] = [
  {
    id: "poblado",
    name: "SALA DE DESPECHO POBLADO",
    city: "Medellín, Colombia",
    address: "Carrera 33 #8A-22, El Poblado",
    schedule: "Miércoles a Domingo desde las 5:00 PM",
    mapUrl: "https://maps.google.com/?q=Sala+de+Despecho+Poblado+Medellin",
    reservationUrl: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-poblado/spanish",
    embedUrl: "https://maps.google.com/maps?q=Sala%20de%20Despecho%20Poblado%20Medellin&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "lemont",
    name: "SALA DE DESPECHO LE MONT",
    city: "Medellín, Colombia",
    address: "Km 5 Vía Las Palmas, Mall Le Mont",
    schedule: "Jueves a Domingo desde las 5:00 PM",
    mapUrl: "https://maps.google.com/?q=Sala+de+Despecho+Le+Mont+Medellin",
    reservationUrl: "https://www.covermanager.com/reserve/module_restaurant/restaurante-sala-de-despecho-lemont/spanish",
    embedUrl: "https://maps.google.com/maps?q=Sala%20de%20Despecho%20Le%20Mont%20Medellin&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "cartagena",
    name: "SALA DE DESPECHO CARTAGENA",
    city: "Cartagena, Colombia",
    address: "Calle #32-130, Plaza de la Aduana",
    schedule: "Miércoles a Domingo desde las 5:00 PM",
    mapUrl: "https://maps.google.com/?q=Sala+de+Despecho+Cartagena",
    reservationUrl: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-cartagena/spanish",
    embedUrl: "https://maps.google.com/maps?q=Sala%20de%20Despecho%20Cartagena&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "bogota",
    name: "SALA DE DESPECHO BOGOTÁ",
    city: "Bogotá, Colombia",
    address: "Carrera 13A #93-91, Piso 3",
    schedule: "Miércoles a Sábado desde las 5:00 PM",
    mapUrl: "https://maps.google.com/?q=Sala+de+Despecho+Bogota",
    reservationUrl: "https://www.covermanager.com/reserve/module_restaurant/sala-de-despecho-bogota/spanish",
    embedUrl: "https://maps.google.com/maps?q=Sala%20de%20Despecho%20Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Ubis() {
  const noteColors = [
    "bg-[#FFF3C4]", // Soft Yellow
    "bg-[#FFD2D7]", // Soft Pink
    "bg-[#C3F6F0]", // Pastel Turquoise
    "bg-[#D86B5B]", // Soft Pastel Red
  ];

  return (
    <section id="ubicaciones" className="bg-[#FAF8F5] py-0 px-0 w-full overflow-hidden select-none">
      <div className="w-full">
        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {LOCATIONS.map((loc, idx) => {
            const bgColor = noteColors[idx % noteColors.length];
            
            // Text and icon color styles for all soft pastel backgrounds
            const titleColor = "text-[#1A1A1A]";
            const subtitleColor = "text-gray-600";
            const infoColor = "text-[#1A1A1A]";
            const iconColor = "text-[#B31B1B]";

            return (
              <div
                key={loc.id}
                className={`${bgColor} p-8 sm:p-10 min-h-[430px] relative flex flex-col justify-between items-start transition-all duration-300`}
                id={`ubicacion-${loc.id}`}
              >
                {/* Header info */}
                <div className="w-full space-y-4 flex flex-col items-center">
                  <div className="text-center">
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${subtitleColor}`}>
                      {loc.city}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-serif font-extrabold tracking-tight mt-1 ${titleColor}`}>
                      {loc.name}
                    </h3>
                  </div>

                  <div className="space-y-2.5 pt-1 flex flex-col items-start w-full">
                    {/* Address Detail */}
                    <div className="flex items-start gap-2.5 text-left">
                      <MapPin className={`h-4.5 w-4.5 mt-0.5 flex-shrink-0 ${iconColor}`} />
                      <span className={`text-xs font-semibold uppercase tracking-wider font-sans leading-tight ${infoColor}`}>
                        {loc.address}
                      </span>
                    </div>

                    {/* Schedule Detail */}
                    <div className="flex items-start gap-2.5 text-left">
                      <Clock className={`h-4.5 w-4.5 mt-0.5 flex-shrink-0 ${iconColor}`} />
                      <span className={`text-xs font-medium font-sans leading-tight ${infoColor}`}>
                        {loc.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Map Wrapper */}
                  <div className="w-full h-44 mt-4 rounded-xl overflow-hidden border border-black/10 shadow-sm relative z-10">
                    <iframe
                      src={loc.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title={loc.name}
                      className="grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
