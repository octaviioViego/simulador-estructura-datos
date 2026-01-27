import { opcionesSimuladorProps } from "./opcionSimulador.types";
import "./ControllerOrdenamiento.css";
import { useState } from "react";

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

            <button
                className={activo ? "boton-activo" : "boton-deshabilitado"}
                onClick={() => onSelect("velocidad")}>Cambiar velocidad</button>
        </div >
    );
}
