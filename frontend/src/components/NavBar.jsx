import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleShowMenu }) {
  return (
    <ul>
      <NavLink to="/" onClick={() => handleShowMenu()}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/pokedex" onClick={() => handleShowMenu()}>
        <li>Pokedex</li>
      </NavLink>
      <NavLink to="/contact" onClick={() => handleShowMenu()}>
        <li>Contact</li>
      </NavLink>
      <NavLink to="/panier" onClick={() => handleShowMenu()}>
        <li>Panier</li>
      </NavLink>
      <div className="img1-responsive-menu " />
    </ul>
  );
}

export default NavBar;
