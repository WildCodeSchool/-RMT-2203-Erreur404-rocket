import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo3bis.png";
import NavBar from "./NavBar";

function Header() {
  /* le header ( qui contient la ul du nav) est cachée par défault (false)  */
  const [showMenu, setShowMenu] = useState(false);
  /* on créer une fonction qui permet de dire que dès qu'on va cliquer sur le burger, son etat changera pour l'inverse. */
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      {/* ternaire dans le div qui retourne le header:  si show menu est true,  alors header à la classe show-nav qui est défnit en css et qui montre le menu. Sinon, le menu est caché. */}
      <img className="logo" src={logo} alt="main-logo" />
      {/* on applique la fonction au click sur le bouton */}
      <button type="button" className="navbar-burger" onClick={handleShowMenu}>
        <span className="bar" />
      </button>
      <div className="menuWrapper">
        <NavBar />

        <div className="banneer-container" />
      </div>
    </div>
  );
}

export default Header;
