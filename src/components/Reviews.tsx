import { useState, useEffect } from "react";
import { INITIAL_CONFESIONES } from "../data";
import { Confesion } from "../types";

export default function Reviews() {
  const [confesiones, setConfesiones] = useState<Confesion[]>([]);

  useEffect(() => {
    const filtered = INITIAL_CONFESIONES.filter((c: Confesion) => c.id !== "cf3");
    setConfesiones(filtered);
  }, []);

  // Predefined background colors for the sticky notes to give an ultra-chic colorful modern wall vibe
  const noteColors = [
    "bg-[#FFF3C4]", // Soft Yellow
    "bg-[#FFD2D7]", // Soft Pink
    "bg-[#C3F6F0]", // Pastel Turquoise
    "bg-[#7FE5D9]/30", // Soft Mint / Aqua opacity
  ];

  return (
    <section id="muro" className="bg-[#FAF8F5] py-0 px-0 w-full overflow-hidden">
      <div className="w-full">
         {/* Confessions Board Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {confesiones.map((conf, idx) => {
            // Cycle backgrounds
            const bgColor = noteColors[idx % noteColors.length];

            return (
              <div
                key={conf.id}
                className={`${bgColor} p-8 min-h-[350px] relative flex flex-col justify-center items-center text-center`}
              >
                {/* Message Confession body */}
                <div className="flex items-center justify-center w-full max-w-md px-4">
                  <p className="text-sm sm:text-base font-semibold text-[#121212]/95 leading-relaxed italic">
                    "{conf.mensaje}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
