import { useMemo, useState } from 'react';
import { listaRandom } from "../algorithms/listings/randomList";
import { Caja } from './Caja';
import { SortingFacade } from '../facades/sortingFacade';
import {randomAlgorithmFacade} from "../facades/randomAlgorithmFacede";
import { motion, AnimatePresence } from 'framer-motion';


export const Animacion = () => {

  const [lista, setLista] = useState(() => listaRandom(6));
  const [idSimulacion, setIdSimulacion] = useState(0);

  const cajaProps = useMemo(
    
    () => randomAlgorithmFacade(lista),
    [lista]
  );

  const handleFinish = () => {
    setTimeout(() => {
      setLista(listaRandom(6));
      setIdSimulacion(id => id + 1);
    }, 500);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idSimulacion}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <Caja {...cajaProps} onFinish={handleFinish} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
