import { SortingFacade } from "../../facades/sortingFacade";
import { CajaProps } from "../../assets/types/cajaProps.types";

const facade = new SortingFacade();

export const strategies: Array<(lista: number[]) => CajaProps> = [
  facade.ordenarBurbuja.bind(facade),
  facade.ordenarBurbujaMejorado.bind(facade),
];