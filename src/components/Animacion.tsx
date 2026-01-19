import { useMemo, useState } from 'react';
import { listaRandom } from "../algorithms/listings/randomList";
import { Caja } from './Caja';
import { SortingFacade } from '../facades/sortingFacade';

import {randomAlgorithmFacade} from "../facades/randomAlgorithmFacede";

export const Animacion = () => {

  const [lista, setLista] = useState(() => listaRandom(6));

  const fachada = useMemo(() => new SortingFacade(), []);

  const cajaProps = useMemo(
    
    () => randomAlgorithmFacade(lista),
    [fachada, lista]
  );

  const handleFinish = () => {
    
    setLista(listaRandom(6));
    
  };

  return (
    <div>
      <Caja
        inicial={cajaProps.inicial}
        nombreAlgoritmo={cajaProps.nombreAlgoritmo}
        nombreIcono={cajaProps.nombreIcono}
        pasos={cajaProps.pasos}
        onFinish={handleFinish}
      />
    </div>
  );
};
