import { useState, FormEvent } from "react";
import { EX_RESPONSES, REASONS_FOR_DESPECHO } from "../data";
import { RefreshCw, Award, ShieldAlert, HeartCrack } from "lucide-react";

export default function Despechometro() {
  const [exName, setExName] = useState("");
  const [reason, setReason] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSanacion = (e: FormEvent) => {
    e.preventDefault();
    if (!exName.trim()) return;

    setIsCalculating(true);
    setResult(null);

    // Simulate retro radar scan calculation delay
    setTimeout(() => {
      // Pick a random response style to surprise the user or match reason
      const randomIdx = Math.floor(Math.random() * EX_RESPONSES.length);
      setResult({
        ...EX_RESPONSES[randomIdx],
        ex: exName.trim(),
        score: Math.floor(65 + Math.random() * 35) // Random high score of despecho
      });
      setIsCalculating(false);
    }, 1800);
  };

  const resetCalculator = () => {
    setExName("");
    setReason("");
    setResult(null);
  };

  return (
    <section id="calibrador" className="bg-[#FFFDF9] pt-8 pb-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="bg-white border border-gray-250 text-[#1A1A1A] [text-shadow:none] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            JUEGO INTERACTIVO
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light italic text-[#1A1A1A] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            El Despechómetro
          </h2>
          <p className="text-[#1A1A1A]/80 font-semibold tracking-wider text-xs uppercase max-w-xl mx-auto mt-3">
            ¿No sabes con qué canción empezar o qué cóctel pedir hoy para pasar el trago amargo? Nuestro algoritmo sagrado te diagnostica de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* CALCULATOR INTERACTIVE BOARD */}
          <div className="md:col-span-5 bg-white border border-gray-200 p-6 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1A1A1A] mb-4 text-center uppercase font-sans w-full">
                Datos del Diagnóstico
              </h3>

              <form onSubmit={calculateSanacion} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nombre del Ex"
                      value={exName}
                      onChange={(e) => setExName(e.target.value)}
                      disabled={isCalculating || result !== null}
                      className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B31B1B] text-[#1A1A1A] font-semibold text-sm disabled:opacity-60 placeholder:text-gray-400 placeholder:font-normal"
                    />
                  </div>

                  <div>
                    <select
                      required
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      disabled={isCalculating || result !== null}
                      className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B31B1B] text-[#1A1A1A] font-medium text-sm disabled:opacity-60"
                    >
                      <option value="" className="text-gray-400 font-normal">Gravedad de la Situación</option>
                      {REASONS_FOR_DESPECHO.map((r, idx) => (
                        <option key={idx} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {!result && (
                  <button
                    type="submit"
                    disabled={isCalculating}
                    className="w-full bg-[#B31B1B] hover:bg-[#1A1A1A] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase text-xs cursor-pointer disabled:opacity-80 tracking-widest"
                    id="submit-calculate-btn"
                  >
                    {isCalculating ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Calculando Gravedad...
                      </>
                    ) : (
                      <>
                        Calcular Mi Sanación
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>

            {result && (
              <button
                onClick={resetCalculator}
                className="w-full mt-4 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase cursor-pointer tracking-wider"
                id="reset-despechometro"
              >
                <RefreshCw className="h-4 w-4" /> Diagnosticar a Otro Ex
              </button>
            )}
          </div>

          {/* DIAGNOSIS OUTPUT CARD DISPLAY */}
          <div className="md:col-span-7 flex flex-col h-full">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl flex flex-col justify-center h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#B31B1B_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />

              {/* EMPTY PLACEHOLDER */}
              {!isCalculating && !result && (
                <div className="text-center py-8 space-y-4 relative z-10">
                  <div className="w-16 h-16 bg-[#FAF9F6] border border-gray-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <HeartCrack className="h-8 w-8 text-[#B31B1B] animate-float" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>Consola del Despechómetro Vacía</h4>
                    <p className="text-xs text-gray-500 font-medium max-w-sm mx-auto mt-2 leading-relaxed">
                      Escribe el nombre de tu ex en el módulo de la izquierda, elige la categoría de fracaso amoroso y presiona el botón para recibir tu receta de coctelera y música sugerida.
                    </p>
                  </div>
                </div>
              )}

              {/* CALCULATION RADAR LOADER SCREEN */}
              {isCalculating && (
                <div className="text-center py-12 relative z-10 space-y-4">
                  <div className="relative w-23 h-23 mx-auto">
                    {/* Pulsing neon scan circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#B31B1B] animate-ping" />
                    <div className="absolute inset-0 rounded-full border border-gray-200 flex items-center justify-center bg-[#FAF9F6]">
                      <ShieldAlert className="h-8 w-8 text-[#B31B1B]" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#B31B1B] uppercase tracking-widest animate-pulse block">SISTEMA ESCANEANDO HISTORIAL ...</span>
                    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">Conectando con base de datos de ex-novios mentirosos...</p>
                  </div>
                </div>
              )}

              {/* REFINED OUTPUT RESULT VIEW */}
              {result && (
                <div className="space-y-6 relative z-10 animate-fadeIn">
                  
                  {/* Result Header Badge */}
                  <div className="flex justify-between items-center pb-3 border-b border-dashed border-gray-200">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">DIAGNÓSTICO OFICIAL</span>
                      <h4 className="text-2xl font-serif font-light italic text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {result.vibe}
                      </h4>
                    </div>

                    <div className="text-right bg-[#B31B1B] text-white px-3 py-1.5 rounded-xl shadow-md">
                      <span className="text-[9px] uppercase font-bold tracking-widest block leading-none">DESPECHO</span>
                      <span className="text-xl font-mono font-bold">{result.score}%</span>
                    </div>
                  </div>

                  {/* Diagnóstico text */}
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-bold text-[#B31B1B] tracking-widest block">CASO REGISTRADO DE: {result.ex}</span>
                    <p className="text-sm font-semibold text-gray-600 leading-relaxed italic bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">
                      "{result.text}"
                    </p>
                  </div>

                  {/* Recommendation Recipe */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Drink Rec */}
                    <div className="bg-[#E5E2D9]/40 border border-gray-150 p-3 rounded-xl flex gap-3">
                      <span className="text-3xl">🍹</span>
                      <div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">BEBIDA RECETADA</span>
                        <span className="text-xs font-bold text-[#1A1A1A]">{result.action}</span>
                      </div>
                    </div>

                    {/* Song Rec */}
                    <div className="bg-[#FAF9F6] border border-gray-150 p-3 rounded-xl flex gap-3">
                      <span className="text-3xl">🎙️</span>
                      <div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">COMO HINCHA DEL MICRÓFONO</span>
                        <span className="text-xs font-bold text-[#1A1A1A]">{result.song}</span>
                      </div>
                    </div>
                  </div>

                  {/* Funny printable dynamic certificate block footer */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-[11px] font-bold text-emerald-800 leading-relaxed uppercase tracking-tight">
                      ¡Estás a salvo! Este diagnóstico te otorga un 10% de descuento en tu primer trago de "{result.song.split(" - ")[0]}". Muestra tu ticket en barra.
                    </span>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
