import QUIENES_SOMOS_LOGO from "../../assets/who/quienesomos.png";

export default function Who() {
  return (
    <section id="quienes-somos" className="bg-[#FFFDF9] pt-0 sm:pt-6 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center w-full text-center">
        <div className="flex justify-center w-full -mt-20 sm:-mt-36 md:-mt-44 -mb-24 sm:-mb-36 md:-mb-44">
          <img 
            src={QUIENES_SOMOS_LOGO} 
            alt="¿Quiénes somos?" 
            className="h-72 sm:h-[26rem] md:h-[32rem] max-w-[95%] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-black font-sans font-normal text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-center mt-0">
          Somos el templo donde las emociones se cantan.
          <br />
          <br />
          Un concepto único que reúne música, gastronomía, coctelería y entretenimiento para convertir cada despecho, celebración o reencuentro en una experiencia inolvidable.
          <br />
          <br />
          Aquí no importa cómo llegues, siempre hay una canción esperándote.
        </p>
      </div>
    </section>
  );
}