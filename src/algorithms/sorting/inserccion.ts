import { Paso } from "../../assets/types/paso.types";

export function inserccion(listaOrigen: number[]): Paso[] {
    const pasos: Paso[] = [];
    const lista: number[] = [...listaOrigen];

    for (let i = 1; i < listaOrigen.length; i++) {
        let valorActual: number = lista[i];
        let posicion: number = i;
        let posicionado: boolean = true

        //El primer paso es para que empiece el simulador (TODAS las cartas abajo.)
        pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "init" });

        //Paso 1 levando la carta Uno 
        pasos.push({ i: posicion, j: posicion, intercambio: false, tipoPaso: "compare" });


        while (posicion > 0 && posicionado) {

            posicionado = false;

            if (lista[posicion - 1] > lista[posicion]) {

                pasos.push({ i: posicion - 1, j: posicion, intercambio: true, tipoPaso: "swap" });

                posicionado = true;

                lista[posicion] = lista[posicion - 1];
                lista[posicion - 1] = valorActual;

                posicion--;
            } else {
                pasos.push({ i: posicion - 1, j: posicion, intercambio: false, tipoPaso: "noSwap" });
            }


        }

    }

    pasos.push({ i: -1, j: -1, intercambio: false, tipoPaso: "done" });
    return pasos;

}