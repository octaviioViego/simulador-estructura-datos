import { useMemo } from "react";
import { SortingFacade } from "../../../facades/sortingFacade";

export function useOrdenamiento(lista: number[], type: string) {
    const facade = useMemo(() => new SortingFacade(), []);

    return useMemo(()=>{
        switch (type) {
                case "burbuja":
                    return facade.ordenarBurbuja(lista);
                case "burbujaMejorado":
                    return facade.ordenarBurbujaMejorado(lista);
                case "seleccion":
                    return facade.ordenarSeleccion(lista);
                case "insercion":
                    return facade.ordenarInserccion(lista);
                case "bubbleBidireccional":
                    return facade.ordenarBurbujaBidireccional(lista);
                case "shell":
                    return facade.ordenarShell(lista);
                default:
                    return facade.ordenarBurbuja(lista);
            }
        },[lista,type]);
}