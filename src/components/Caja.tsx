import '../App.css';
import { Simulador } from './Simulador';
import  type {Paso} from "../assets/types/paso.types";
import {IconName,iconos} from "../assets/constants/iconos";

interface CartasProps {
  inicial: number[];
  pasos: Paso[];
  nombreAlgoritmo: string;
  nombreIcono: IconName;
}

export function Caja ({pasos,inicial,nombreAlgoritmo,nombreIcono}: CartasProps) {
    
    //const nombre = nombreIcono as keyof typeof iconos;
    const iconoSeleccionado = iconos[nombreIcono];
    
    return (
    <div className="caja">
        <div>
            <img src={iconoSeleccionado} alt="test" className="na-logo" />
            <h1>{nombreAlgoritmo}</h1>
            <img src={iconoSeleccionado} alt="test" className="na-logo" />
        </div>
       <Simulador inicial={inicial} pasos={pasos}/> 
        {/* <Animacion />  */}
    </div>
  );
}