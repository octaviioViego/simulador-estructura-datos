import { iconos } from "../../assets/constants/iconos";

export const BotonEmpezar = () => {
    return (
        <div>
            <div className="contenedor-imagen" onClick={() => {
                // if (!listaOrdenada) {
                //     onSelect("ordenar");
                //     activar(false);
                // }
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
}