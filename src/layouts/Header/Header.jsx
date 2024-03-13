import logo from "../../assets/images/logo/LOGO.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    <header className="header">
     <figure className="header_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="header_nav">
        <ul >
          <NavLink className={(link) => (link.isActive ? "header_nav_item header_nav_active" : "header_nav_item")}  to="/">ACCUEIL</NavLink>
          <NavLink className={(link) => (link.isActive ? "header_nav_item header_nav_active" : "header_nav_item")} to="/about">A PROPOS</NavLink>
        </ul>
      </nav>

    </header>
    </>
  );
}
