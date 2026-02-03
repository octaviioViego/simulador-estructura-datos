type TipoPaso = | "compare" | "swap" | "noSwap" | "done" | "init" | "processing";


export type Paso = {
  i: number;
  j: number;
  intercambio: boolean;
  tipoPaso: TipoPaso;
};


/**
 * Usamos un Record para que sea mas facil el mantenimiento de los textos
 * y que estos se actualicen automaticamente si cambia el tipoPaso
 */
export const PasoOrdenamiento: Record<TipoPaso, string> = {
  init: "Iniciando ordenamiento",
  done: "Ordenamiento completado",
  noSwap: "No se intercambian los elementos",
  swap: "Se intercambian los elementos",
  compare: "Se comparan los elementos",
  processing: "Esperando inicio...",
}

