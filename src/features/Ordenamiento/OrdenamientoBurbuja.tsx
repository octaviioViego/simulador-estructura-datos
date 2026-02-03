import { ControllerOrdenamiento } from "../UsuarioOrdenamiento/ControllerOrdenamiento";
export const OrdenamientoBurbuja = () => {
    return (
        <div>
            <h1>Ordenamiento Burbuja (Bubble Sort)</h1>
            <p>El ordenamiento burbuja es un algoritmo de ordenamiento simple
                que funciona comparando pares de elementos adyacentes y
                intercambiándolos si están en el orden incorrecto.
                Este proceso se repite hasta que el array esté ordenado.</p>
            <p>Simulador de ordenamiento burbuja</p>
            <div>
                <ControllerOrdenamiento type="burbuja" />
            </div>
        </div>
    );
}
