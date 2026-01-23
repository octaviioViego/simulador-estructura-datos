import {
  burbujaNormal,burbujaMejorado,burbujaBidireccional,
  seleccion,inserccion,
  shell,

} from "../algorithms/sorting";
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
        nombreIcono: "BurbujaBidireccional"
      };

  }

  ordenarSeleccion(lista: number[]): CajaProps {
      return {
        inicial: lista,
        pasos: seleccion(lista),
        nombreAlgoritmo: "Ordenamiento de selección",
        nombreIcono: "OrdenamientoSeleccion"
      };
  }
  
  ordenarInserccion(lista: number[]): CajaProps {
      return {
        inicial: lista,
        pasos: inserccion(lista),
        nombreAlgoritmo: "Ordenamiento de insercción",
        nombreIcono: "OrdenamientoInsertar"
      };
  }
  
  ordenarShell(lista: number[]): CajaProps {
      return {
        inicial: lista,
        pasos: shell(lista),
        nombreAlgoritmo: "Ordenamiento Shell (Saltos GAP.)",
        nombreIcono: "OrdenamientoShell"
      };
  }
}