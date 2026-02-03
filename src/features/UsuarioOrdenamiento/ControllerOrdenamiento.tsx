import { useCallback, useMemo, useState } from "react";
import { opcionesSimuladorProps } from "./opcionSimulador.types";
import { ConsolaOrdenamiento } from "./ConsolaOrdenamiento";
import { listaRandom } from "../../algorithms/listings/randomList";
import { SortingFacade } from "../../facades/sortingFacade";
import { Caja } from "../../components/Caja";
import { OrdenamientoProps } from "../ordenamiento/ordenamientoPage/ordenamientoPage.types";

/*
 * Componente principal de Ordenamiento donde se encarga de controlar el estado de la simulacion
 * 
 * @returns {JSX.Element} Componente principal de Ordenamiento
 * 
 */

export const ControllerOrdenamiento = ({ type }: OrdenamientoProps) => {

    const [opcion, setOpcion] = useState<opcionesSimuladorProps["type"]>("array");
    const [listaInicial, setListaInicial] = useState(() => listaRandom(6));
    const [lista, setLista] = useState(listaInicial);
    const [empezar, setEmpezar] = useState(false);
    const [activo, setActivo] = useState(true);
    const [listaOrdenada, setListaOrdenada] = useState(false);


    /*
     * Nota: Este se puede reutilizar para los demas algoritmos de ordenamiento 
     */
    const cajaProps = useMemo(
        () => {
            const facade = new SortingFacade();
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
            }
            return facade.ordenarBurbuja(lista);
        },
        [lista]
    );

    /**
     * Maneja la seleccion de una opcion usada por el componente ConsolaOrdenamiento
     * 
     * @param opcion - Opcion seleccionada
     * 
     * Usamos useCallback para evitar la re-renderizacion innecesaria
     */

    const manejarOpcion = useCallback(
        (opcion: opcionesSimuladorProps["type"]) => {
            switch (opcion) {
                case "array":
                    const nueva = listaRandom(6);
                    setListaInicial(nueva);
                    setLista(nueva);
                    setEmpezar(false);
                    break;

                case "ordenar":
                    setEmpezar(true);
                    break;

                case "reiniciar":
                    setLista([...listaInicial]);
                    setEmpezar(false);
                    break;
            }

            setOpcion(opcion);
        },
        [listaInicial]
    );

    const handleFinish = useCallback(() => {
        setActivo(true);
        setListaOrdenada(true);
    }, []);

    return (
        <div>
            <Caja {...cajaProps} empezar={empezar} onFinish={handleFinish} />
            <h2>
                Consola de Ordenamiento
            </h2>
            <ConsolaOrdenamiento onSelect={manejarOpcion} activar={setActivo}
                activo={activo} listaOrdenada={listaOrdenada} activarOrdenar={setListaOrdenada} />
        </div>
    );
}