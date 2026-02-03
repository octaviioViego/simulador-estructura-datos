import { Animacion } from "../../components/Animacion";
import { OrdenamientoProps } from "./ordenamiento.types";
import { IntroduccionOrdenamiento } from "./IntroduccionOrdenamieto";
import { AnimatePresence, motion } from "framer-motion";
import { OrdenamientoBurbuja } from "./OrdenamientoBurbuja";
import { opcionMenuItem } from "./opcionMenuItem.types";
import { OrdenamientoBurbujaMejorado } from "./OrdenamientoBurbujaMejorado";

export const SeleccionOpciones = ({ type }: OrdenamientoProps) => {

    /** 
     * Usamos Partial para que pueda recibir un valor undefined 
     * Record para que pueda recibir un valor de tipo OrdenamientoProps['type']
     * Usamos opcionMenuItem para que pueda recibir un valor de tipo opcionMenuItem
    */

    const OpcionMenu: Partial<Record<OrdenamientoProps['type'], opcionMenuItem>> = {
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