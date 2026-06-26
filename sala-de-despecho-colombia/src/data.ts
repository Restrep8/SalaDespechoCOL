import { Confesion } from "./types";

export const INITIAL_CONFESIONES: Confesion[] = [
  {
    id: "cf1",
    mensaje: "Vine aquí a cantar '200 copas' a grito herido. Si me ves llorando no es por ti Sofia, es el limón del tequila. Mentira, sí te lloro jodida."
  },
  {
    id: "cf2",
    mensaje: "Tres meses diciéndome que 'no quería presiones' pero ayer lo vi de la mano con otra en el Lleras. Mateo, sos un payaso de primera categoría."
  },
  {
    id: "cf4",
    mensaje: "Me dejó en azul la semana pasada y hoy me sale con un 'Hola olvidada'. Aquí le dedico la de Paquita: ¡Rata de dos patas!"
  }
];

export const REASONS_FOR_DESPECHO = [
  "Me montaron los cachos",
  "Quiere volver pero ya me valoré",
  "Me bloqueó de todas partes",
  "Se fue con su ex",
  "Me ghosteó por completo",
  "Sigo enamorad@ pero ya no funciona"
];

export const EX_RESPONSES = [
  {
    vibe: "Sanación Inmediata",
    text: "¡Ese personaje no te merece ni un suspiro! Olvídate del pasado hoy mismo. Tu ex se quedó muy chiquit@ al lado de un monumento como tú.",
    action: "Brinda con un cóctel '200 Copas' con tus mejores amigas y canta a grito herido.",
    song: "200 Copas - Karol G"
  },
  {
    vibe: "Furia y Dignidad",
    text: "¡Qué nivel de descaro! Menos mal te diste cuenta de lo rata que es. ¡A desahogarse con toda la rabia de tu ser!",
    action: "Pide el trago 'Rata de Dos Patas' y grita cada frase señalando al techo de la Sala.",
    song: "Rata de Dos Patas - Paquita la del Barrio"
  },
  {
    vibe: "Poco Hombre / Poca Mujer",
    text: "Ese nivel de tibieza es digno de un circo ambulante. No llores por payasos, ven a bailar reggaeton y despecho de corrido.",
    action: "Tómate un shot doble de Aguardiente Antioqueño en nuestra barra y mira el muro de las solteras.",
    song: "Mi Ex Tenía Razón - Karol G"
  },
  {
    vibe: "Nostalgia Cantinera",
    text: "Entendemos que duele, el corazón a veces tarda en sanar. Pero un despecho bien vivido con buena música es el mejor remedio del mundo.",
    action: "Disfruta de un cóctel de la casa mirando las hermosas luces de la ciudad y bríndate un 'El Clavo y el Tornillo'.",
    song: "Sobreviviré - Darío Gómez"
  }
];
