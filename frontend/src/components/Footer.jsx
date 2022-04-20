import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo3bis.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/logo-twitter.png";
import instagram from "../assets/instagram.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <img
          className="logo"
          src={logo}
          alt="Le logo du Pokedex de la Team Rocket"
        />

        <div className="footer-navigation">
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
          </ul>
        </div>
        <div className="social-networks">
          <a href="https://www.instagram.com/teamrocketofficial/">
            <img
              className="instagram"
              src={instagram}
              alt="Le logo instagram"
              width="40px"
            />
          </a>
          <a href="http://localhost:3000/*">
            <img
              className="twitter"
              src={twitter}
              alt="Le logo twitter"
              width="40px"
            />
          </a>
          <a href="http://localhost:3000/*">
            <img
              className="facebook"
              src={facebook}
              alt="Le logo Facebook"
              width="40px"
            />
          </a>
        </div>
      </div>
      <div className="description">
        <p> Designed by Rocket Team - all right reserved ®- 2022 </p>
      </div>
    </div>
  );
}

export default Footer;
