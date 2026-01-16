import { useEffect, useMemo, useState } from 'react';
import Cartas from './Carta/Cartas';
import { burbujaNormal } from "../algorithms/sorting";
import { lista_random } from "../algorithms/listings/randomList";

export const Animacion = () => {
  // 1. ESTADOS PRINCIPALES
  // 'inicial' actúa como la semilla. Cuando cambia, todo se reinicia.
  const [inicial, setListaBase] = useState(lista_random(6));
  
  // 'lista' es lo que el usuario ve en pantalla (las cartas moviéndose).
  const [lista, setLista] = useState([...inicial]);
  
  const [pasoActual, setPasoActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(true);

  // 2. CÁLCULO DE PASOS (MEMOIZADO)
  // Solo se vuelve a calcular si la lista 'inicial' cambia.
  const pasos = useMemo(() => {
    return burbujaNormal(inicial);
  }, [inicial]);

  // Paso actual que se está ejecutando
  const paso = pasos[pasoActual];

  // 3. SINCRONIZADOR VISUAL
  // Cuando generamos una nueva lista base, reseteamos la lista visual inmediatamente.
  useEffect(() => {
    setLista([...inicial]);
  }, [inicial]);

  // 4. RELOJ DE LA ANIMACIÓN
  // Se encarga de aumentar el contador pasoActual cada 700ms.
  useEffect(() => {
    if (!reproduciendo) return;

    const intervalo = setInterval(() => {
      setPasoActual(p => p + 1);
    }, 700);

    return () => clearInterval(intervalo);
  }, [reproduciendo]);

  // 5. LÓGICA DE INTERCAMBIO Y BUCLE INFINITO
  useEffect(() => {
    // SI LLEGAMOS AL FINAL:
    if (!paso) {
      // Esperamos 1.5 segundos para que el usuario vea el resultado final ordenado.
      const delay = setTimeout(() => {
        const nuevaLista = lista_random(6); 
        setListaBase(nuevaLista); // Dispara el useMemo y el reseteo visual
        setPasoActual(0);          // Volvemos al inicio del nuevo algoritmo
      }, 650); 

      return () => clearTimeout(delay);
    }

    // SI HAY UN INTERCAMBIO EN ESTE PASO:
    if (paso.intercambio) {
      setLista(prev => {
        const copia = [...prev];
        [copia[paso.i], copia[paso.j]] = [copia[paso.j], copia[paso.i]];
        return copia;
      });
    }
  }, [pasoActual, paso]); 

  // 6. RENDERIZADO
  return (
    <div className="">
      {/* Pasamos los índices i y j para iluminar las cartas que se comparan */}
      <Cartas lista={lista} num_1={paso?.i ?? -1} num_2={paso?.j ?? -1} /> 
    </div>
  );
};