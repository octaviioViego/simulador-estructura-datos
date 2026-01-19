import { iconos} from "../assets/constants/iconos";
export const Navbar = () => {

  const imaLogo = iconos.Logo;
  
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={imaLogo} alt="test" className="navbar-logo" />
        <div className="logo-text">
          Algoritmos Y <span>Estructuras</span>
        </div>
      </div>
      
      <ul>
        <li>
          <a href="https://github.com/octaviioViego" target="_blank">Ir GitHub</a>
        </li>
      </ul>
    </nav>
  );
};