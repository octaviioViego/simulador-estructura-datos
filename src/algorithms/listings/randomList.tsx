function numero_aleatorio(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

export function lista_random(numero : number = 10): number[]{
    const inicial = [];
    
    for(let i=0; i<numero; i++){
      inicial.push(numero_aleatorio(1, 100));
    }

    return inicial;
  }