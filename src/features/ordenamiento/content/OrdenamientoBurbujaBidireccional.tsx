import { ControllerOrdenamiento } from "../../boton-reinicio/OrdenamientoContainer";
export const OrdenamientoBurbujaBidireccional = () => {
    return (
        <div>
            <h1>Ordenamiento Burbuja Bidireccional (Bubble Sort Bidirectional)</h1>
            <p>El ordenamiento de burbuja bidireccional (también conocido como cocktail shaker sort o método coctel)
                es una variante mejorada del algoritmo de burbuja clásico. Ordena elementos moviendo los
                valores más grandes al final y los más pequeños al inicio simultáneamente en cada iteración, alternando
                la dirección de escaneo de izquierda a derecha y viceversa para reducir el número de comparaciones</p>
            <p>Simulador del ordenamiento de burbuja bidireccional</p>
            <div>
                <ControllerOrdenamiento type="bubbleBidireccional" />
            </div>
        </div>
    );
}