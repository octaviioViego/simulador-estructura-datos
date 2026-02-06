import { ControllerOrdenamiento } from "../../boton-reinicio/OrdenamientoContainer";
export const OrdenamientoSeccion = () => {
    return (
        <div>
            <h1>Ordenamiento Seleccion (Selection Sort)</h1>
            <p>El ordenamiento seleccion es un algoritmo de ordenamiento simple
                que funciona seleccionando el elemento más pequeño y moviendolo
                al inicio del array.
                Este proceso se repite hasta que el array esté ordenado.</p>
            <p>Simulador del ordenamiento de seleccion</p>
            <div>
                <ControllerOrdenamiento type="seleccion" />
            </div>
        </div>
    );
}
