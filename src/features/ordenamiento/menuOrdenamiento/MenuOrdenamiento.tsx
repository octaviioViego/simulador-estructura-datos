import "./MenuOrdenamiento.css";
import { OrdenamientoProps } from "../ordenamientoPage/ordenamientoPage.types";


export const MenuOrdenamiento = ({ onSelect }: { onSelect: (type: OrdenamientoProps["type"]) => void }) => {

    return (
        <div>
            <div className="ordenamiento-dropdown-container ">
                <div className="button-ordenamiento">
                    <button onClick={() => onSelect("introduccion")}>Introducción</button>
                    <button onClick={() => onSelect("burbuja")}>Bubble Sort</button>
                    <button onClick={() => onSelect("burbujaMejorado")}>Bubble Sort Mejorado</button>
                    <button onClick={() => onSelect("bubbleBidireccional")}>Bubble bidireccional</button>
                    <button onClick={() => onSelect("seleccion")}>Selection Sort</button>
                    <button onClick={() => onSelect("insercion")}>Insertion Sort</button>
                    <button onClick={() => onSelect("shell")}>Shell Sort</button>
                </div>
            </div>
        </div>

    );
};


