import { iconos } from "../../assets/constants/iconos";
import { HeroProps } from "../Hero/heroProps.types";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

export const Navbar = ({ onSelect }: { onSelect: (type: HeroProps["type"]) => void }) => {

  const imaLogo = iconos.Logo;
  const imaGithub = iconos.Github;
  const imaMenu = "Menu";

  return (
    <nav className="navbar">

      <div className="logo-container logo">
        <img src={imaLogo} alt="test" className="navbar-logo" />
        <div className="logo-text">
          Algoritmos Y <span>Estructuras</span>
        </div>
      </div>

      <div className="actions">
        <Dropdown label="Menú" nombreIcono={imaMenu}>
          <div className="menu-item has-submenu">
            Algoritmos
            <span className="arrow">▶</span>

            <div className="submenu">

              <div className="submenu-item" onClick={() => onSelect("ordenamiento")}>
                Ordenamiento
              </div>

              <div className="submenu-item" onClick={() => onSelect("busqueda")}>
                Búsqueda
              </div>
            </div>
          </div>

          <div className="menu-item has-submenu">
            Estructuras de datos
            <span className="arrow">▶</span>

            <div className="submenu">
              <div className="submenu-item">Pilas</div>
              <div className="submenu-item">Colas</div>
              <div className="submenu-item">Arboles</div>
              <div className="submenu-item">Hash</div>
              <div className="submenu-item">Matrices</div>
            </div>
          </div>
        </Dropdown>

        <button className="github-button ">
          <img src={imaGithub} alt="test" />
          <a href="https://github.com/octaviioViego" target="_blank">Ir GitHub</a>
        </button>
      </div>

    </nav >
  );
};