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
    <>
      <div className="banneer-container" />
      <div className="maincontainer">
        <div className="section1">
          <div className="rejoins-nous">
            <Slide>
              <h1>Nous sommes de retour ... !</h1>
              <p>
                <br />
                <b>La Team Rocket est de retour!</b>
                <br />
                <br />
                pour vous jouer un mauvais tour...
                <br />
                <br />
                <b>Afin de mettre fin aux défaites et à l&apos;humiliation.</b>
                <br />
                <br />
                Nous sommes de retour, plus puissant que jamais !
                <br />
                <br />
                <b>Rejoins-nous ou ce sera la guerre !</b>
                <br />
                <br />
              </p>

              <NavLink className="buttonContact" to="/Contact">
                Rejoins-nous !
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
              <h1>Avec un tout nouveau Pokédex ...</h1>
              <p>
                <br />
                Nous avons mis au point l&apos;arme ultime ...
                <br />
                <br />
                <b>
                  Récupère toutes les données des pokémon les plus puissants
                </b>
                <br />
                <br />
                Plus rapidement que la lumière...
                <br />
                <br />
                <b>Au nez et à la barbe du Morveux.</b>
                <br />
                <br />
                Constitue une armée invincible pour notre Boss <b>Giovanni .</b>
                <br />
                <br />
              </p>

              <NavLink className="buttonPokedex" to="/Pokedex">
                Découvre notre Pokédex !
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
          <h1>
            Prêt? <br />
            Etendons notre pouvoir
            <br /> jusqu&apos;à la voie lactée ...
          </h1>
          <div className="description-wrapper">
            <div className="description-jessie">
              <p>
                Avec Jessie
                <br />
                partout où tu ira
                <br /> tu semera le chaos !
                <br />
              </p>
              <img className="jessie" src={jessieRocket} alt=" jessie" />
            </div>

            <div className="description-miaouss">
              <p>
                Miaouss t&apos;accompagne
                <br /> pour une vengeance <br />
                sans limite !
              </p>
              <img className="miaouss" src={miaoussAlone} alt="Miaouss" />
            </div>

            <div className="description-james">
              <p>
                Est-ce La volupté <br />
                De la victoire
                <br />
                que j&apos;entends au loin ?
              </p>
              <img className="james" src={jamesRocket} alt="James" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acceuil;
