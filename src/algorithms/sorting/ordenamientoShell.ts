import {Paso} from "../../assets/types/paso.types";


export function shell(listaOrigen:number[]):Paso[]{
    const pasos: Paso [] = [];
    const lista: number[] = [...listaOrigen]; 

    
    for(let gap=Math.trunc(lista.length / 2);gap>0;gap= Math.trunc(gap / 2) ){
        for(let i = gap; i< lista.length; i++){
            let temp:number;
            let j = i;
            let bandera:boolean;
            
            pasos.push({ i: j, j: j, intercambio: false});
            //Aqui se hacen las comparaciones hacia atras
            do{
                 bandera = false;

                 pasos.push({ i: j, j: j-gap, intercambio: false});
                 if(j >= gap && lista[j-gap]>lista[j]){
                    bandera = true;
                    pasos.push({ i: j-gap, j: j, intercambio: true});
                    temp = lista[j];
                    lista[j] = lista[j-gap];
                    lista[j-gap] = temp;
                    j -= gap;
                 }

            }while(j>=gap && bandera);
            
        }

    }

    return pasos;

}