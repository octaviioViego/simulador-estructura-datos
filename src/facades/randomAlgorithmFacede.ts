import { numero_aleatorio } from "../algorithms/listings/randomList";
import { CajaProps } from "../assets/types/cajaProps.types";
import { strategies } from "../assets/constants/strategies";

export function randomAlgorithmFacade(lista: number[]): CajaProps {
  const index = numero_aleatorio(0, strategies.length);
  return strategies[index](lista);
}
