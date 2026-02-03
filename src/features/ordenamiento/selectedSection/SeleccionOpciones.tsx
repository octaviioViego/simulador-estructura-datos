import { Animacion } from "../../../components/Animacion";
import { OrdenamientoProps } from "../ordenamientoPage/ordenamientoPage.types";
import { IntroduccionOrdenamiento } from "../content/IntroduccionOrdenamieto";
import { AnimatePresence, motion } from "framer-motion";
import { OrdenamientoBurbuja } from "../content/OrdenamientoBurbuja";
import { OpcionMenuSeleccion } from "./seleccionOpciones.types";
import { OrdenamientoBurbujaMejorado } from "../content/OrdenamientoBurbujaMejorado";
import { OrdenamientoSeccion } from "../content/OrdenamientoSeccion";
import { OrdenamientoInserccion } from "../content/OrdenamientoInserccio";
import { OrdenamientoBurbujaBidireccional } from "../content/OrdenamientoBurbujaBidireccional";
import { OrdenamientoShell } from "../content/OrdenamientoShell";

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