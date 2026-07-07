import menuImg from "@/assets/menu/menu.png";

export default function Menu() {
  return (
    <section id="menu" className="bg-[#FFFDF9] py-8 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-md sm:max-w-lg mx-auto flex flex-col items-center w-full">
        <img
          src={menuImg}
          alt="Menú"
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
