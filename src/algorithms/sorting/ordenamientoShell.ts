import { Paso } from "../../assets/types/paso.types";


export function shell(listaOrigen: number[]): Paso[] {
    const pasos: Paso[] = [];
    const lista: number[] = [...listaOrigen];

    //El primer paso es para que empiece el simulador (TODAS las cartas abajo.)
    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "init" });

    for (let gap = Math.trunc(lista.length / 2); gap > 0; gap = Math.trunc(gap / 2)) {
        for (let i = gap; i < lista.length; i++) {
            let temp: number;
            let j = i;
            let bandera: boolean;

            pasos.push({ i: j, j: j, intercambio: false, tipoPaso: "compare" });
            //Aqui se hacen las comparaciones hacia atras
            do {
                bandera = false;

                pasos.push({ i: j, j: j - gap, intercambio: false, tipoPaso: "compare" });
                if (j >= gap && lista[j - gap] > lista[j]) {
                    bandera = true;
                    pasos.push({ i: j - gap, j: j, intercambio: true, tipoPaso: "swap" });
                    temp = lista[j];
                    lista[j] = lista[j - gap];
                    lista[j - gap] = temp;
                    j -= gap;
                } else {
                    pasos.push({ i: j - gap, j: j, intercambio: false, tipoPaso: "noSwap" });
                }

            } while (j >= gap && bandera);

        }

    }

    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "done" });
    return pasos;

}