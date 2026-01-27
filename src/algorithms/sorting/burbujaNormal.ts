import { Paso } from "../../assets/types/paso.types";

export function burbujaNormal(listaOrigen: number[]): Paso[] {
    const pasos: Paso[] = [];
    const lista = [...listaOrigen];
    //El primer paso es para que empiece el simulador (TODAS las cartas abajo.)
    pasos.push({ i: -1, j: -1, intercambio: false });

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < (lista.length - i - 1); j++) {
            pasos.push({ i: j, j: j + 1, intercambio: false });

            if (lista[j] > lista[j + 1]) {
                var num = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = num;
                pasos.push({ i: j, j: j + 1, intercambio: true });
            }
        }
    }

    return pasos;
}
