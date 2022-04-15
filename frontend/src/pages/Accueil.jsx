import React from "react";

import Giovani from "../assets/giovanni-standing.png";
import teamRocket1 from "../assets/team-rocket1.png";
import teamRocketball from "../assets/team-rocket ball.png";
import jessieRocket from "../assets/jessie-rocket.jpg";
import miaoussAlone from "../assets/miaouss-alone.png";
import jamesRocket from "../assets/james-rocket.jpg";

import "../styles/Accueil.css";

function Acceuil() {
  return (
    <div className="maincontainer">
      <div className="section1">
        <div className="rejoins-nous">
          <h1>Rejoins-nous!</h1>
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
        </div>

        <img className="giovanni" src={Giovani} alt="Giovanni" />
      </div>

      <div className="section2">
        <img className="lateam" src={teamRocket1} alt="team-rocket1" />

        <div className="la chasse">
          <h1>Prêt pour la chasse?</h1>
          <p>
            {" "}
            Informé tu seras!
            <br />
            Etre rusé tu devras!
            <br />
            Consulte les cartes Pokémon
            <br />
            Allies puissance et pouvoir
            <br />
            Vole tes Pokémons et pars à la chasse!
          </p>
        </div>
      </div>

      <div className="rocketballi">
        <img className="rocketball" src={teamRocketball} alt="rocketball" />
      </div>

      <div className="section3">
        <img className="jessie" src={jessieRocket} alt="jessierocket" />
        <img className="miaouss" src={miaoussAlone} alt="miaoussalone" />
        <img className="james" src={jamesRocket} alt="jamesrocket" />
      </div>
    </div>
  );
}

export default Acceuil;
