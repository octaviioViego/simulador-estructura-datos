import { Animacion } from "../Animacion";
import { HeroProps } from "./heroProps.types";
import { Ordenamiento } from "../../features/ordenamiento-view/page/OrdenamientoPage";

export const Hero = ({ type }: HeroProps) => {

  switch (type) {
    case "ordenamiento":
      return (
        <section>
          <Ordenamiento />
        </section>
      );
    case "menu":
      return (
        <header className="hero-container">
          <h1>Visualizador de Algoritmos</h1>
          <ul>
            <li>
              Este proyecto podrás ver el comportamiento de algunos algoritmos
              de ordenamiento y búsqueda,<br />
              donde también se incluyen algoritmos de estructura de datos como nodos, pilas y más.

            </li>
          </ul>

          <Animacion />
        </header>
      );
    default:
      return (
        <header className="hero-container">
          <h1>Visualizador de Algoritmos</h1>
          <ul>
            <li>
              Este proyecto podrás ver el comportamiento de algunos algoritmos
              de ordenamiento y búsqueda,<br />
              donde también se incluyen algoritmos de estructura de datos como nodos, pilas y más.

            </li>
          </ul>

          <Animacion />
        </header>
      );
  }

};
