import { useState } from "react";
import { MenuOrdenamiento } from "./MenuOrdenamiento";
import { iconos } from "../../assets/constants/iconos";
import "./Ordenamiento.css";
import { OrdenamientoProps } from "./ordenamiento.types";
import { SeleccionOpciones } from "./SeleccionOpciones";

/**
 *  Componente principal de Ordenamiento donde se encarga de renderizar el menu de opciones y el contenido
 * 
 * @returns {JSX.Element} Componente principal de Ordenamiento
 * 
 */

export function Ordenamiento() {
    const [heroType, setHeroType] = useState<OrdenamientoProps["type"]>("animacion");

    return (

        <div>
            <div className="ordenamiento-container">
                <img src={iconos.Algoritmos} alt="test" className="ordenamiento-img" />
                <h1>Algoritmos de Ordenamiento</h1>
                <img src={iconos.Algoritmos} alt="test" className="ordenamiento-img" />
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