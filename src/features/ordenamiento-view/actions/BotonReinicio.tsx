import { iconos } from "../../../assets/constants/iconos";
import "./BotonReinicio.css";
import { EstadoBoton, Props } from "./botonReinicio.types";

export const BotonReinicio = ({ estado, onSelect, activar }: Props) => {
    const estados: Record<EstadoBoton, { texto: string, icono?: string, accion?: () => void; }> = {
        ordenando: {
            texto: "Ordenando Lista..."
        },
        listo_ordenar: {
            texto: "Ordenar lista",
            icono: iconos.Empezar,
            accion: () => {
                onSelect("ordenar");
                activar(false);
            }
        },
        listo_reiniciar: {
            texto: "Generar nuevo",
            icono: iconos.Reinicio,
            accion: () => {
                onSelect("reiniciar");
                activar(false);
            }
        }
    }
    const { texto, icono, accion } = estados[estado];

    if (!icono) {
        return <div className="contenedor-texto">{texto}</div>
    }

    return (
        <div className="contenedor-principal">
            <div className="contenedor-imagen" onClick={accion}>
                <img src={icono} alt={texto} draggable="false" />
            </div>
            <div className="contenedor-texto">
                {texto}
            </div>

        </div>
    );
};