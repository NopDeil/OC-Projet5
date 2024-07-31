import { NavLink } from "react-router-dom";
import logo_header from "../../assets/logo-header.png";
import "../../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <img  src={logo_header} alt="Logo_Kasa"/>
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <NavLink className={ ({ isActive }) => 
            isActive ? "nav-active" : ""
            } to="/">Accueil</NavLink>
          </li>
          <li className="li">
            <NavLink  className={ ({ isActive }) => 
            isActive ? "nav-active" : ""
            } to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
