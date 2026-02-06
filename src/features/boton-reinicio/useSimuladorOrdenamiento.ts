import { useState } from "react";
import { listaRandom } from "../../algorithms/listings/randomList";

export function useSimuladorOrdenamiento(){
    const [lista, setLista] = useState(() => listaRandom(6));
    const [empezar, setEmpezar] = useState(false);
    const [activo, setActivo] = useState(true);
    const [listaOrdenada, setListaOrdenada] = useState(false);
    
    /**
         * Maneja la seleccion de una opcion usada por el componente ConsolaOrdenamiento
         * 
         * @param accion: ordenar o reinicial. Por ahoro no es necesario typearlo.
         * 
         */
    
        const ejecutarAccionSimulador =  (accion: "ordenar" | "reiniciar") => {
                switch (accion) {
                    case "reiniciar":
                        const nueva = listaRandom(6);
                        setLista(nueva);
                        setEmpezar(true);
                        break;
    
                    case "ordenar":
                        setEmpezar(true);
                        break;
                }
            };

        const finalizarSimulacion = () => {
            setActivo(true);
            setListaOrdenada(true);
        };

        return{lista,empezar,activo,listaOrdenada, ejecutarAccionSimulador, finalizarSimulacion, setActivo};
    }