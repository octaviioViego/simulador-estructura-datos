import { Paso } from "./paso.types";

export interface CartasProps {
  pasos: Paso[]; // Estamos diciendo: "Recibiré un arreglo de números"
  lista: number[];
  empezar: boolean;
}