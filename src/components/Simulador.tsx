import { useEffect, useState } from 'react';
import {Cartas} from './Carta/Cartas';
import {Paso} from '../assets/types/paso.types';

interface CartasProps {
  pasos: Paso[]; // Estamos diciendo: "Recibiré un arreglo de números"
  inicial: number[];
}

export function Simulador({pasos,inicial} : CartasProps) {
  
  const [lista, setLista] = useState([...inicial]);
  
  const [pasoActual, setPasoActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);

  const paso = pasos[pasoActual];

  //Unica responsabilidad decir que ya paso el 700ms para el siguiente paso
  useEffect(() => {
    if (!reproduciendo) return;

    //Cada 700 ms avanzamos al siguiente paso.
    const intervalo = setInterval(() => {
      setPasoActual(p => p + 1); // Cambia el valor del paso. 
    }, 700);

    return () => clearInterval(intervalo); // Limpieza entre intervalos
  }, [reproduciendo]);

  //Logica de movieminto de las cartas
  useEffect(() => {
    if (!paso) {
      setReproduciendo(false);
      return;
    }

    // Si el paso actual dice que hay intercambio, lo ejecutamos. Cuando los pasos cambiaron 
    //autonaticamente se acciona
  if (paso.intercambio) {
    setLista(prev => {
      const copia = [...prev];
      [copia[paso.i], copia[paso.j]] = [copia[paso.j], copia[paso.i]];
      return copia;
    });
  }
  // Si no hay intercambio, setLista NO se llama, 
  // pero los num_1 y num_2 siguen iluminando las cartas porque pasoActual cambió.
}, [pasoActual]);


    return (
        <div>
            <Cartas lista={lista} num_1={paso?.i ?? -1} num_2={paso?.j ?? -1} /> 
             <button onClick={() => setReproduciendo(true)}>Play</button>
        </div>
    );
}