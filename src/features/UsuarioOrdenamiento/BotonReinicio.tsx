import { iconos } from "../../assets/constants/iconos";
import { opcionesSimuladorProps } from "./opcionSimulador.types";
import "./botonReinicio.css";

export const BotonReinicio = ({ onSelect, activar, activo, listaOrdenada, activarOrdenar }:
    {
        onSelect: (type: opcionesSimuladorProps["type"]) => void,
        activar: (activo: boolean) => void,
        activo: boolean,
        activarOrdenar: (activo: boolean) => void,
        listaOrdenada: boolean
    }) => {

    if (!activo) {
        return (
            <div className="contenedor-texto">
                Ordenando la lista...
            </div>
        );
    }
    if (!listaOrdenada) {
        return (
            <div className={activo ? "contenedor-principal" : "boton-deshabilitado"}>
                <div className="contenedor-imagen" onClick={() => {
                    if (!listaOrdenada) {
                        onSelect("ordenar");
                        activar(false);
                    }
                }}>
                    <img
                        src={iconos.Empezar}
                        alt="Empezar"
                        draggable="false"
                    />
                </div>

                <div className="contenedor-texto">
                    Ordenar la lista
                </div>
            </div>
        );
    } else {
        return (
            <div className="contenedor-principal">
                <div className="contenedor-imagen" onClick={() => {
                    if (listaOrdenada) {
                        onSelect("reiniciar");
                        activar(false);
                    }
                }}>
                    <img
                        src={iconos.Reinicio}
                        alt="Reinicio"
                        draggable="false"
                    />
                </div>

                <div className="contenedor-texto">
                    Generar nuevo ordenamiento
                </div>
            </div>
        );
    }
}
