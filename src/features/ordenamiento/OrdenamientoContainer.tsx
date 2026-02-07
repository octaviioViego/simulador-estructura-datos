import { Caja } from "../../components/Caja";
import { OrdenamientoProps } from "../ordenamiento-view/page/ordenamientoPage.types";
import { BotonReinicio } from "../boton-reinicio/BotonReinicio";
import { useBotonReinicio } from "../boton-reinicio/useBotonReinicio";
import { useOrdenamiento } from "./useOrdenamiento";
import { useSimuladorOrdenamiento } from "./useSimuladorOrdenamiento";

/*
 * Componente principal de Ordenamiento donde se encarga de controlar el estado de la simulacion
 * 
 * @returns {JSX.Element} Componente principal de Ordenamiento
 * 
 */

export const ControllerOrdenamiento = ({ type }: OrdenamientoProps) => {

    /*
    * Estados del componente
    * 
    * @param Usamos el useSimuladorOrdenamiento como nuestro caso de uso. 
    * Encargado de nuestras variables.
    */
    const {lista,empezar,activo,listaOrdenada,ejecutarAccionSimulador,finalizarSimulacion,setActivo} = useSimuladorOrdenamiento();
    const cajaProps = useOrdenamiento(lista,type);


    /*
    * Determina el estado del boton de reinicio (esta es nuestra logica).
    */
    const estadoBoton = useBotonReinicio(activo, listaOrdenada);

    return (
        <div>
            <Caja {...cajaProps} empezar={empezar} onFinish={finalizarSimulacion} />
            <BotonReinicio estado={estadoBoton} onSelect={ejecutarAccionSimulador} activar={setActivo} />
        </div>
    );
}


