import { ControllerOrdenamiento } from "../UsuarioOrdenamiento/ControllerOrdenamiento";
export const OrdenamientoBurbujaMejorado = () => {
    return (
        <div>
            <h1>Ordenamiento Burbuja Mejorado (Bubble Sort)</h1>
            <p>El ordenamiento burbuja mejorado es un algoritmo de ordenamiento simple
                que funciona comparando pares de elementos adyacentes y
                intercambiándolos si están en el orden incorrecto.
                Este proceso se repite hasta que el array esté ordenado.
                La mejora consiste en que si no se realizan intercambios en una
                iteración, el algoritmo sabe que el array está ordenado y puede
                terminar prematuramente.</p>
            <p>Simulador de ordenamiento burbuja mejorado</p>
            <div>
                <ControllerOrdenamiento type="burbujaMejorado" />
            </div>
        </div>
    );
}
