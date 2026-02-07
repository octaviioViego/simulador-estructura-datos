import { EstadoBoton } from "./botonReinicio.types";

/**
 * Determina el estado del boton de reinicio (esta es nuestra logica).
 * @param activo Estado del simulador para saber si esta ordenando o no.
 * @param listaOrdenada Estado de la lista para saber si esta ordenada o no.
 */

export function useBotonReinicio(activo: Boolean, listaOrdenada: Boolean): EstadoBoton {
    if (!activo) {
        return "ordenando";
    }

    if (!listaOrdenada) {
        return "listo_ordenar";
    }

    return "listo_reiniciar";
}