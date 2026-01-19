import '../App.css';
import { Simulador } from './Simulador';
import {iconos} from "../assets/constants/iconos";
import {CajaProps} from "../assets/types/cajaProps.types";
import { useCallback } from 'react';
export interface CajaCallBackProps {
  onFinish?: () => void;
}

export function Caja ({pasos,inicial,nombreAlgoritmo,nombreIcono, onFinish}: CajaProps & CajaCallBackProps) {
  
  const handleFinish = useCallback(() => {
    onFinish?.();
  }, [onFinish]);

    //const nombre = nombreIcono as keyof typeof iconos;
    const iconoSeleccionado = iconos[nombreIcono];
    
    return (
    <div className="caja">
        <div>
            <img src={iconoSeleccionado} alt="test" className="na-logo" />
            <h1>{nombreAlgoritmo}</h1>
            <img src={iconoSeleccionado} alt="test" className="na-logo" />
        </div>

       <Simulador inicial={inicial} pasos={pasos}  onFinish={handleFinish}/>

    </div>
  );
}