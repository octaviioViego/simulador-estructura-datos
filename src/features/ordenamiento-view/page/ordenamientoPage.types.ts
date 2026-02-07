type TipoOrdenamiento = 
    | "introduccion"
    | "burbuja"
    | "burbujaMejorado"
    | "seleccion"
    | "insercion"
    | "bubbleBidireccional"
    | "shell"
    | "animacion";

export interface OrdenamientoProps {
    type: TipoOrdenamiento;
}
