import {Paso} from "./paso.types";
import {IconName} from "../constants/iconos";


export type CajaProps = {
  inicial: number[];
  pasos: Paso[];
  nombreAlgoritmo: string;
  nombreIcono: IconName;
};
