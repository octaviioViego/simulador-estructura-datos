import { useEffect, useState } from 'react';
import { Cartas } from './Carta/Cartas';
import { CartasProps } from '../assets/types/cartasProps.types';
import { OnFinishCallback } from '../assets/types/callbacks/simulacion.callbacks';

export function Simulador({ pasos, lista, onFinish, empezar }: CartasProps & OnFinishCallback) {

  const [listaCopia, setListaCopia] = useState<number[]>([]);
  const [pasoActual, setPasoActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [finalizado, setFinalizado] = useState(false);


  const paso = pasos[pasoActual];

  useEffect(() => {
    if (!empezar) return;

    const timer = setTimeout(() => {
      setReproduciendo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [empezar, pasos, lista]);


  /* 1. RESET TOTAL cuando cambian pasos o lista inicial */
  useEffect(() => {

    setListaCopia([...lista]);
    setPasoActual(0);
    setReproduciendo(false);
    setFinalizado(false);
  }, [pasos, lista]);

  /* 2. Avanzar pasos */
  useEffect(() => {
    if (!reproduciendo) return;

    const timer = setTimeout(() => {
      setPasoActual(p => p + 1);
    }, 700); //700 ms

    return () => clearTimeout(timer);
  }, [reproduciendo, pasoActual]);


  /* 3. Ejecutar lógica del paso */
  useEffect(() => {
    if (!paso) {
      setReproduciendo(false);
      setFinalizado(true);
      return;
    }

    if (paso.intercambio) {
      setListaCopia(prev => {
        const copia = [...prev];
        [copia[paso.i], copia[paso.j]] = [copia[paso.j], copia[paso.i]];
        return copia;
      });
    }
  }, [paso]);

  /* 4. Avisar al padre */
  useEffect(() => {
    if (!finalizado) return;

    const timer = setTimeout(() => {
      onFinish?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [finalizado, onFinish]);

  return (

    <Cartas lista={listaCopia} num_1={paso?.i ?? -1} num_2={paso?.j ?? -1} />

  );
}
