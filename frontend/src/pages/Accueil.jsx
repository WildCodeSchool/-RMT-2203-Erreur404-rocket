import React from "react";
import { NavLink } from "react-router-dom";

import { Slide } from "react-awesome-reveal";

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
          <Slide>
            <h1>Rejoins-nous !</h1>
            <p>
              {" "}
              La Team Rocket est de retour!
              <br />
              afin de mettre fin aux défaites et à l&apos;humiliation
              <br />
              nous recherchons des chasseurs pour rallier le monde à notre cause
              <br />
              jouins-toi à nous ou ce sera la guerre!
            </p>
            <NavLink className="buttonContact" to="/Contact">
              Contact le boss
            </NavLink>
          </Slide>
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
          <Slide>
            <h1>Prêt pour la chasse ?</h1>
            <p>
              {" "}
              Consulte les cartes Pokémon
              <br />
              allies puissance et pouvoir pour être le meilleur
              <br />
              capture tes proies et pars à leur chasse!
            </p>
            <NavLink className="buttonPokedex" to="/Pokedex">
              C&apos;est par ici la chasse
            </NavLink>
          </Slide>
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
            <p>Avec Jessie partout où tu ira, tu semera le chaos !</p>
            <img className="jessie" src={jessieRocket} alt="jessierocket" />
          </div>

          <div className="description-miaouss">
            <p>Miaouss t&apos;accompagne, pour une vengeance sans limite</p>
            <img className="miaouss" src={miaoussAlone} alt="miaoussalone" />
          </div>

          <div className="description-james">
            <p>Est-ce ta victoire que j&apos;entends au loin ?</p>
            <img className="james" src={jamesRocket} alt="jamesrocket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
