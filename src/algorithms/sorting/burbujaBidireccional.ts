import { Paso } from "../../assets/types/paso.types";

export function burbujaBidireccional(listaOrigen: number[]): Paso[] {
    const pasos: Paso[] = [];

    const lista = [...listaOrigen]

    let izquierda: number = 0;
    let derecha: number = (listaOrigen.length - 1)
    let control: boolean = true

    //El primer paso es para que empiece el simulador (TODAS las cartas abajo.)
    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "init" });

    while ((izquierda < derecha) && control) {
        control = false;

        for (let i = izquierda; i < derecha; i++) {
            pasos.push({ i: i, j: i + 1, intercambio: false, tipoPaso: "compare" });

            if (lista[i] > lista[i + 1]) {
                pasos.push({ i: i, j: i + 1, intercambio: true, tipoPaso: "swap" });

                control = true;
                var auxNumero = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = auxNumero;
            } else {
                pasos.push({ i: i, j: i + 1, intercambio: false, tipoPaso: "noSwap" });
            }
        }
        derecha--;

        for (let j = derecha; izquierda < j; j--) {
            pasos.push({ i: j, j: j - 1, intercambio: false, tipoPaso: "compare" });

            if (lista[j] < lista[j - 1]) {
                pasos.push({ i: j, j: j - 1, intercambio: true, tipoPaso: "swap" });

                control = true;
                var auxNumero = lista[j];
                lista[j] = lista[j - 1];
                lista[j - 1] = auxNumero;
            } else {
                pasos.push({ i: j, j: j - 1, intercambio: false, tipoPaso: "noSwap" });
            }
        }
        izquierda++;
    }

    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "done" });
    return pasos;
}