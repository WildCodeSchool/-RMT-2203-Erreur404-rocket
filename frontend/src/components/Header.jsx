import React, { useState } from "react";

import logo from "../assets/logo3bis.png";
import NavBar from "./NavBar";

import "../styles/Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="header" className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      <img
        className="logo"
        src={logo}
        alt="Le logo du Pokedex de la Team Rocket"
      />
      <button
        type="button"
        className="navbar-burger"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span className="bar" />
      </button>
      <div className="menuWrapper">
        <NavBar handleShowMenu={handleShowMenu} />
      </div>
    </div>
  );
}
export default Header;
