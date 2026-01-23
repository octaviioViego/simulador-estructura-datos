import { SortingFacade } from "../../facades/sortingFacade";
import { CajaProps } from "../../assets/types/cajaProps.types";

const facade = new SortingFacade();

export const strategies: Array<(lista: number[]) => CajaProps> = [
  facade.ordenarBurbuja.bind(facade),
  facade.ordenarBurbujaMejorado.bind(facade),
  facade.ordenarBurbujaBidireccional.bind(facade),
  facade.ordenarSeleccion.bind(facade),
  facade.ordenarInserccion.bind(facade),
  facade.ordenarShell.bind(facade),
];