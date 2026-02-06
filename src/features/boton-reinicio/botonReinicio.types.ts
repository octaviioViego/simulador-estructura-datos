/*
 * Tipos de datos para el componente BotonReinicio
 */
import { opcionesSimuladorProps } from "./opcionSimulador.types";

export type EstadoBoton = "listo_ordenar" | "listo_reiniciar" | "ordenando";

export interface Props {
    estado: EstadoBoton;
    onSelect: (type: opcionesSimuladorProps["type"]) => void;
    activar: (activo: boolean) => void;
}