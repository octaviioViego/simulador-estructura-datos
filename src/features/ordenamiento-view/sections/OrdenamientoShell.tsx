import { ControllerOrdenamiento } from "../container/OrdenamientoContainer";
export const OrdenamientoShell = () => {
    return (
        <div>
            <h1>Ordenamiento Shell</h1>
            <p>El ordenamiento Shell (Shell sort) es un algoritmo eficiente basado en la inserción que mejora el
                rendimiento ordenando primero elementos lejanos (con un "gap" o brecha) y reduciendo este intervalo
                gradualmente hasta 1, momento en que actúa como una inserción directa. Es una generalización del ordenamiento
                por inserción que reduce drásticamente el movimiento de elementos.</p>
            <p>Simulador del ordenamiento Shell</p>
            <div>
                <ControllerOrdenamiento type="shell" />
            </div>
        </div>
    );
}