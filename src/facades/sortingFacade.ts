import {burbujaNormal,burbujaMejorado,burbujaBidireccional} from "../algorithms/sorting";
import {CajaProps} from "../assets/types/cajaProps.types";

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

  ordenarBurbujaBidireccional(lista: number[]): CajaProps {
   
    return {
        inicial: lista,
        pasos: burbujaBidireccional(lista),
        nombreAlgoritmo: "Burbuja bidireccional",
        nombreIcono: "BurbujaMejorado"
      };

  }

}