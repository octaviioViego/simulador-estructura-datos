import { Animacion } from "../../../components/Animacion";
import { OrdenamientoProps } from "../page/ordenamientoPage.types";
import { IntroduccionOrdenamiento } from "../sections/IntroduccionOrdenamieto";
import { AnimatePresence, motion } from "framer-motion";
import { OrdenamientoBurbuja } from "../sections/OrdenamientoBurbuja";
import { OpcionMenuSeleccion } from "./seleccionOpciones.types";
import { OrdenamientoBurbujaMejorado } from "../sections/OrdenamientoBurbujaMejorado";
import { OrdenamientoSeccion } from "../sections/OrdenamientoSeccion";
import { OrdenamientoInserccion } from "../sections/OrdenamientoInserccio";
import { OrdenamientoBurbujaBidireccional } from "../sections/OrdenamientoBurbujaBidireccional";
import { OrdenamientoShell } from "../sections/OrdenamientoShell";

export const SeleccionOpciones = ({ type }: OrdenamientoProps) => {

    /** 
     * Usamos Partial para que pueda recibir un valor undefined 
     * Record para que pueda recibir un valor de tipo OrdenamientoProps['type']
     * Usamos opcionMenuItem para que pueda recibir un valor de tipo opcionMenuItem
    */

    const OpcionMenu: Partial<Record<OrdenamientoProps['type'], OpcionMenuSeleccion>> = {
        introduccion: {
            component: <IntroduccionOrdenamiento />,
            animationId: 1,
        },
        burbuja: {
            component: <OrdenamientoBurbuja />,
            animationId: 2,
        },
        burbujaMejorado: {
            component: <OrdenamientoBurbujaMejorado />,
            animationId: 3,
        },
        seleccion: {
            component: <OrdenamientoSeccion />,
            animationId: 4,
        },
        insercion: {
            component: <OrdenamientoInserccion />,
            animationId: 5,
        },
        bubbleBidireccional: {
            component: <OrdenamientoBurbujaBidireccional />,
            animationId: 6,
        },
        shell: {
            component: <OrdenamientoShell />,
            animationId: 7,
        }

    };

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={OpcionMenu[type]?.animationId ?? 0}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                >
                    {OpcionMenu[type]?.component ?? <Animacion />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}