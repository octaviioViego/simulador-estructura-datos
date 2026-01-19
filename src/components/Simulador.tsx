import { useEffect, useState } from 'react';
import { Cartas } from './Carta/Cartas';
import { CartasProps } from '../assets/types/cartasProps.types';

export interface CajaCallBackProps {
  onFinish?: () => void;
}

export function Simulador({
  pasos,
  inicial,
  onFinish,
}: CartasProps & CajaCallBackProps) {

  const [lista, setLista] = useState<number[]>([]);
  const [pasoActual, setPasoActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const paso = pasos[pasoActual];

  /* 1. RESET TOTAL cuando cambian pasos o lista inicial */
  useEffect(() => {
  
    setLista([...inicial]);
    setPasoActual(0);
    setReproduciendo(false);
    setFinalizado(false);

    const timer = setTimeout(() => {
      setReproduciendo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pasos, inicial]);

  /* 2. Avanzar pasos */
  useEffect(() => {
    if (!reproduciendo) return;

    const timer = setTimeout(() => {
      setPasoActual(p => p + 1);
    }, 700);

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
      setLista(prev => {
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
    <Cartas
      lista={lista}
      num_1={paso?.i ?? -1}
      num_2={paso?.j ?? -1}
    />
  );
}
