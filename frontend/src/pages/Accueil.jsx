import React from "react";
import { NavLink } from "react-router-dom";

import Giovani from "../assets/giovanni-standing.png";
import teamRocket1 from "../assets/team-rocket1.png";
import teamRocketball from "../assets/team-rocket ball.png";
import jessieRocket from "../assets/jessie-rocket.jpg";
import miaoussAlone from "../assets/miaouss-alone.png";
import jamesRocket from "../assets/james-rocket.jpg";
import backgroundvideo from "../assets/backgroundvideo.mp4";

import "../styles/Accueil.css";

function Acceuil() {
  return (
    <div className="maincontainer">
      <video autoPlay loop muted id="video">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="section1">
        <div className="rejoins-nous">
          <h1>Rejoins-nous !</h1>
          <p>
            {" "}
            La Team Rocket déclare la guerre!
            <br />
            Afin de rallier le monde à notre cause
            <br />
            Afin de rendre l avenir diabolique et le présent infernal
            <br />
            Afin d étendre notre colère jusqu à la voie lactée
            <br />
            Attrapez-les tous ou ce sera la guerre!
          </p>

          <NavLink className="buttonpokedex" to="/Pokedex">
            <span>Voir Pokedex</span>
          </NavLink>
        </div>
        <div />
        <div className="giovanni-container">
          <img className="giovanni" src={Giovani} alt="Giovanni" />
        </div>
      </div>
      <div className="separation">
        <hr className="separateur" />
        <img className="rocketball" src={teamRocketball} alt="rocketball" />
        <hr className="separateur" />
      </div>

      <div className="section2">
        <img className="lateam" src={teamRocket1} alt="team-rocket1" />

        <div className="lachasse">
          <h1>Prêt pour la chasse ?</h1>
          <p>
            {" "}
            Consulte les cartes Pokémon
            <br />
            allies puissance et pouvoir
            <br />
            vole tes Pokémons et pars à la chasse!
          </p>
          <NavLink className="buttonpanier" to="/Panier">
            <span>Voir Panier</span>
          </NavLink>
        </div>
      </div>

      <div className="separation">
        <hr className="separateur" />
        <img className="rocketball" src={teamRocketball} alt="rocketball" />
        <hr className="separateur" />
      </div>

      <div className="section3">
        <div className="description-wrapper">
          <div className="description-jessie">
            <p>Partout où nous allons, nous semons le chaos !</p>
            <img className="jessie" src={jessieRocket} alt="jessierocket" />
          </div>

          <div className="description-miaouss">
            <p>De retour pour une vengeance sans limite</p>
            <img className="miaouss" src={miaoussAlone} alt="miaoussalone" />
          </div>

          <div className="description-james">
            <p>Est-ce la victoire que j entends au loin ?</p>
            <img className="james" src={jamesRocket} alt="jamesrocket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
