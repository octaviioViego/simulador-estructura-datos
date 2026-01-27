import { ReactElement } from "react";

/**
 * Tipo para definir un menu de opciones
 * 
 * @property component - Componente que se renderizara
 * @property animationId - Id de la animacion
 */
export type opcionMenuItem = {
    component: ReactElement;
    animationId: number;
};