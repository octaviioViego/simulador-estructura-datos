import { ControllerOrdenamiento } from "../container/OrdenamientoContainer";
export const OrdenamientoInserccion = () => {
    return (
        <div>
            <h1>Ordenamiento Inserccion (Insertion Sort)</h1>
            <p>El ordenamiento por inserción es un algoritmo de ordenamiento simple que
                funciona insertando iterativamente cada elemento de una lista desordenada
                en su posición correcta dentro de la sección ordenada de la lista.
                Es como ordenar naipes. Se dividen las cartas en dos grupos: las ordenadas
                y las desordenadas. Luego, se elige una carta del grupo desordenado y se
                coloca en el lugar correcto dentro del grupo ordenado.</p>
            <ul>
                <li>El algoritmo comienza con el primer elemento de la lista y lo considera como ordenado.</li>
                <li>Luego, toma el siguiente elemento y lo inserta en su posición correcta dentro del grupo ordenado.</li>
                <li>Este proceso se repite hasta que todos los elementos estén ordenados.</li>
            </ul>
            <p>Simulador del ordenamiento de inserccion</p>
            <div>
                <ControllerOrdenamiento type="insercion" />
            </div>
        </div>
    );
}
