import './Cartas.css';

// 1. Definimos qué "Props" acepta nuestro componente
interface CartasProps {
  lista: number[]; // Estamos diciendo: "Recibiré un arreglo de números"
  num_1: number;
  num_2: number;
}

// 2. Usamos las Props en la función
export function Cartas({ lista, num_1, num_2}: CartasProps){
  return (
    <div className="contenedor-Estilo simulador-container">
      {lista.map((numero, index) => (
        <div
          key={index} 
           className={`card-Estilo
            ${index === num_1 || index === num_2 ? "elevada" : ""}`}
        >
          {numero}
        </div>
      ))}
    </div>
  );
};
