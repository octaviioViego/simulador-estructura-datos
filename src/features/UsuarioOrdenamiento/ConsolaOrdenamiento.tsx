import { opcionesSimuladorProps } from "./opcionSimulador.types";
import "./ControllerOrdenamiento.css";
import Dropdown from "./DropdownOrdenamiento";

export const ConsolaOrdenamiento = ({ onSelect, activar, activo, listaOrdenada, activarOrdenar }:
    {
        onSelect: (type: opcionesSimuladorProps["type"]) => void,
        activar: (activo: boolean) => void,
        activo: boolean,
        activarOrdenar: (activo: boolean) => void,
        listaOrdenada: boolean
    }) => {

    return (
        <div className="contenedor-botones caja ">

            <button
                className={(!listaOrdenada && activo) ? "boton-activo" : "boton-deshabilitado"}
                onClick={() => {
                    if (!listaOrdenada) {
                        onSelect("ordenar");
                        activar(false);
                    }
                }}>Ordenar lista</button>


            <button
                className={activo ? "boton-activo" : "boton-deshabilitado"}
                onClick={() => {
                    if (activo) {
                        onSelect("array");
                        activarOrdenar(false);
                    }
                }}>Generar nueva lista</button>

            <button
                className={activo ? "boton-activo" : "boton-deshabilitado"}
                onClick={() => {
                    if (activo) {
                        onSelect("reiniciar");
                        activarOrdenar(false);
                    }
                }}>Reiniciar ordenamiento</button>

            <Dropdown label="Cambiar velocidad" className="" >
                <div className="dropdown-boton">
                    <button>+ 10% (Aumentar velocidad)</button>
                    <button>- 10% (Disminuir velocidad)</button>
                </div>
            </Dropdown>

        </div >
    );
}
