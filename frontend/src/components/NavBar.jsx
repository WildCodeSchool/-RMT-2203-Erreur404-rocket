import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(showMenu, setShowMenu) {
  return (
    <ul>
      <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/pokedex" onClick={() => setShowMenu(!showMenu)}>
        <li>Pokedex</li>
      </NavLink>
      <NavLink to="/contact" onClick={() => setShowMenu(!showMenu)}>
        <li>Contact</li>
      </NavLink>
      <NavLink to="/panier" onClick={() => setShowMenu(!showMenu)}>
        <li>Panier</li>
      </NavLink>
      <div className="img1-responsive-menu " />
    </ul>
  );
}

export default NavBar;
