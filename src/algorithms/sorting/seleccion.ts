import { Paso } from "../../assets/types/paso.types";

export function seleccion(listaOrigen: number[]): Paso[] {
    const pasos: Paso[] = [];
    const lista = [...listaOrigen];

    //var iniLista:number = 0;
    var numMenor: number = 0;

    //El primer paso es para que empiece el simulador (TODAS las cartas abajo.)
    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "init" });

    for (let i = 0; i < lista.length; i++) {

        numMenor = i;

        for (let j = i + 1; j < lista.length; j++) {
            pasos.push({ i: j - 1, j: j, intercambio: false, tipoPaso: "compare" });

            if (lista[numMenor] > lista[j]) {
                numMenor = j;
            }
        }

        //
        let auxNumero = lista[i];
        lista[i] = lista[numMenor];
        lista[numMenor] = auxNumero;
        pasos.push({ i: numMenor, j: i, intercambio: true, tipoPaso: "swap" });

    }

    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "done" });
    return pasos;
}