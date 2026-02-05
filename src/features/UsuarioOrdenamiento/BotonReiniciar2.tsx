import { iconos } from "../../assets/constants/iconos";

export const BotonReiniciar2 = () => {
    return (
        <div>
            <div className="contenedor-imagen" onClick={() => {
                // if (!listaOrdenada) {
                //     onSelect("ordenar");
                //     activar(false);
                // }
            }}>
                <img
                    src={iconos.Reinicio}
                    alt="Reiniciar"
                    draggable="false"
                />
            </div>

            <div className="contenedor-texto">
                Reiniciar ordenamiento
            </div>
        </div>
    );
}