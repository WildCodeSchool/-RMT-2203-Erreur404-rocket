import React, { useState } from "react";

import logo from "../assets/logo3bis.png";
import NavBar from "./NavBar";

import "../styles/Header.css";

function Header() {
  /* le header ( qui contient la ul du nav) est cachée par défault (false)  */
  const [showMenu, setShowMenu] = useState(false);
  /* on créer une fonction qui permet de dire que dès qu'on va cliquer sur le burger, son etat changera pour l'inverse. */

  return (
    <div className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      {/* ternaire dans le div qui retourne le header:  si show menu est true,  alors header à la classe show-nav qui est défnit en css et qui montre le menu. Sinon, le menu est caché. */}
      <img
        className="logo"
        src={logo}
        alt="Le logo du Pokedex de la Team Rocket"
      />
      {/* on applique la fonction au click sur le bouton */}
      <button
        type="button"
        className="navbar-burger"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="bar" />
      </button>
      <div className="menuWrapper">
        <NavBar />
      </div>
    </div>
  );
}
export default Header;
