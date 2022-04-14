import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/pokedex">
          <li>Pokedex</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/panier">
          <li>Panier</li>
        </NavLink>
        <div className="img1-responsive-menu " />
      </ul>
    </div>
  );
}

export default NavBar;
