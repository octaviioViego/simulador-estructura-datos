import { Paso } from "./paso.types";
import { IconName } from "../constants/iconos";


export type CajaProps = {
  lista: number[];
  pasos: Paso[];
  nombreAlgoritmo: string;
  nombreIcono: IconName;
  empezar?: boolean;
};
