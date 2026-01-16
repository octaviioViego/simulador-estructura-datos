import {burbujaNormal,burbujaMejorado} from "../algorithms/sorting";

import {Paso} from "../assets/types/paso.types";
import {IconName} from "../assets/constants/iconos";



export type CajaProps = {
  inicial: number[];
  pasos: Paso[];
  nombreAlgoritmo: string;
  nombreIcono: IconName;
};


export class SortingFacade{
    

  ordenarBurbuja(lista: number[]): CajaProps {

     return {
      inicial: lista,
      pasos: burbujaNormal(lista),
      nombreAlgoritmo: "Burbuja",
      nombreIcono: "Burbuja"
    };

  }

  ordenarBurbujaMejorado(lista: number[]): CajaProps {

     return {
      inicial: lista,
      pasos: burbujaMejorado(lista),
      nombreAlgoritmo: "Burbuja mejorado",
      nombreIcono: "BurbujaMejorado"
    };

  }


}