import { Confesion } from "./types";

export const INITIAL_CONFESIONES: Confesion[] = [
  {
    id: "cf1",
    mensaje: "Vine aquí a cantar '200 copas' a grito herido. Si me ves llorando no es por ti Sofia, es el limón del tequila. Mentira, sí te lloro jodida."
  },
  {
    id: "cf2",
    mensaje: "Tres meses diciéndome que 'no quería presiones' pero ayer lo vi de la mano con otra. Mateo, sos un payaso de primera categoría."
  },
  {
    id: "cf4",
    mensaje: "Me dejó en azul la semana pasada y hoy me sale con un 'Hola perdida'. Aquí le dedico la de Paquita: ¡Rata de dos patas!"
  }
];

export const REASONS_FOR_DESPECHO = [
  "Me pusieron los cachos",
  "Quiere volver pero ya me valoré",
  "Me bloqueó de todas partes",
  "Volvió con su ex",
  "Me pidió un tiempo",
  "Sigo enamorad@ pero ya no funciona"
];

export const EX_RESPONSES = [
  {
    vibe: "Sanación Inmediata",
    text: "¡Ese personaje no te merece ni un suspiro! Olvídate del pasado hoy mismo. Tu ex se quedó muy chiquit@ al lado de un monumento como tú.",
    action: "Nalgas Alegres",
    song: "Mi Ex Tenía Razón - Karol G"
  },
  {
    vibe: "Furia y Dignidad",
    text: "¡Qué nivel de descaro! Menos mal te diste cuenta de lo rata que es. ¡A desahogarse con toda la rabia de tu ser!",
    action: "Paquita",
    song: "Rata de Dos Patas - Paquita la del Barrio"
  },
  {
    vibe: "Poco Hombre / Poca Mujer",
    text: "Ese nivel de tibieza es digno de un circo ambulante. No llores por payasos, ven a bailar reggaeton y despecho de corrido.",
    action: "Carajillo",
    song: "Y cómo es él - José Luis Perales"
  },
  {
    vibe: "Nostalgia Cantinera",
    text: "Entendemos que duele, el corazón a veces tarda en sanar. Pero un despecho bien vivido con buena música es el mejor remedio del mundo.",
    action: "Juanga",
    song: "Querida - Juan Gabriel"
  },
  {
    vibe: "Fuera de las Canchas",
    text: "Es hora de colgar los guayos del amor por un momento y tomarte un descanso. Date un tiempo fuera de las canchas para sanar el corazón antes de volver a jugar.",
    action: "Caída Rosa",
    song: "Amorfoda - Bad Bunny"
  }
];
