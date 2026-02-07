import { useState } from "react";
import { MenuOrdenamiento } from "../menu/MenuOrdenamiento";
import { iconos } from "../../../assets/constants/iconos";
import "./OrdenamientoPage.css";
import { OrdenamientoProps } from "./ordenamientoPage.types";
import { SeleccionOpciones } from "../state/SeleccionOpciones";

/**
 *  Componente principal de Ordenamiento donde se encarga de renderizar el menu de opciones y el contenido
 * 
 * @returns {JSX.Element} Componente principal de Ordenamiento
 * 
 */

export function Ordenamiento() {
    /**
     * Esto se llama Indexed Access Type (Valores que son validos). 
     * El cual le proporsionamos el type que esta dentro de OrdenamientoProps.
     * El type animacion es el valor inicial cuando se monta Ordenamiento.
     */
    const [heroType, setHeroType] = useState<OrdenamientoProps["type"]>("animacion");

    return (

        <div>

            <div className="ordenamiento-container">
                <img src={iconos.Algoritmos} alt="test" className="ordenamiento-img" draggable="false" />
                <h1>Algoritmos de Ordenamiento</h1>
                <img src={iconos.Algoritmos} alt="test" className="ordenamiento-img" draggable="false" />
            </div>

            <div className="ordenamiento-dropdown-container">
                <div className="menu-col">
                    <MenuOrdenamiento onSelect={setHeroType} />
                </div>
                <div className="content-col ">
                    <SeleccionOpciones type={heroType} />
                </div>
            </div>
        </div>
    );
}