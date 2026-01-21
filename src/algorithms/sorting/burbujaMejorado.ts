import {Paso} from "../../assets/types/paso.types";

export function burbujaMejorado(listaOrigen: number[]): Paso[]{
    const pasos: Paso [] = []; 
    let movimientos : boolean = true;

    const lista = [...listaOrigen];
    let contador : number =  0;
    
    while(contador < lista.length -1  && movimientos){
        movimientos = false;
        for(let j=0; j < (lista.length-contador -1); j++){
            
            pasos.push({ i: j, j: j + 1, intercambio: false});
            
            if (lista[j] > lista[j + 1]) {
              movimientos = true;
              
              var num = lista[j];
              lista[j] = lista[j + 1]; 
              lista[j+1] = num;
              
              pasos.push({ i: j, j: j + 1, intercambio: true});
          } 
        }
        contador ++;
    }
    
    return pasos;
}
