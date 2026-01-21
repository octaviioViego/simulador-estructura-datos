import '../App.css';
import { Simulador } from './Simulador';
import {iconos} from "../assets/constants/iconos";
import {CajaProps} from "../assets/types/cajaProps.types";
import { useCallback } from 'react';
import {OnFinishCallback} from '../assets/types/callbacks/simulacion.callbacks';

export function Caja ({pasos,inicial,nombreAlgoritmo,nombreIcono, onFinish}: CajaProps & OnFinishCallback) {
  
  const handleFinish = useCallback(() => {
    onFinish?.();
  }, [onFinish]);

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