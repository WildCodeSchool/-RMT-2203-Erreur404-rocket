import React from "react";

import { HashLink as NavLink } from "react-router-hash-link";

import { Slide } from "react-awesome-reveal";

import Séparateur from "../components/Séparateur";
import Giovani from "../assets/giovanni-standing.png";
import teamRocket1 from "../assets/team-rocket1.png";
import jessieRocket from "../assets/jessie-rocket.jpg";
import miaoussAlone from "../assets/miaouss-alone.png";
import jamesRocket from "../assets/james-rocket.jpg";

import "../styles/Accueil.css";
import Banniere from "../components/Banniere";

function Acceuil() {
  return (
    <>
      <Banniere />
      <div className="maincontainer">
        <div className="section1">
          <div className="rejoins-nous">
            <Slide>
              <h1>Nous sommes de retour ... !</h1>
              <div className="paragraph-content">
                <p>
                  La Team Rocket est de retour! pour vous jouer un mauvais
                  tour...
                </p>
                <p className="bold">
                  Afin de mettre fin aux défaites et à l&apos;humiliation.
                </p>
                <p>Nous sommes de retour, plus puissant que jamais !</p>
                <p className="bold">Rejoins-nous ou ce sera la guerre !</p>
              </div>

              <NavLink className="buttonContact" to="/Contact#header">
                Rejoins-nous !
              </NavLink>
            </Slide>
          </div>
          <div className="giovanni-container">
            <img className="giovanni" src={Giovani} alt="Giovanni" />
          </div>
        </div>
        <Séparateur />
        <div className="section2">
          <img className="lateam" src={teamRocket1} alt="team-rocket1" />
          <div className="lachasse">
            <Slide>
              <h2>Avec un tout nouveau Pokédex ...</h2>
              <div className="paragraph-content">
                <p>Nous avons mis au point l&apos;arme ultime ...</p>
                <p className="bold">
                  Récupère toutes les données des pokémon les plus puissants
                </p>
                <p> Plus rapidement que la lumière...</p>
                <p className="bold">Au nez et à la barbe du Morveux.</p>

                <p>
                  Constitue une armée invincible pour notre Boss{" "}
                  <span className="bold">Giovanni.</span>
                </p>
              </div>
              <NavLink className="buttonPokedex" to="/Pokedex#header">
                Découvre notre Pokédex !
              </NavLink>
            </Slide>
          </div>
        </div>

        <Séparateur />

        <div className="section3">
          <h2>
            Prêt? <br />
            Etendons notre pouvoir
            <br /> jusqu&apos;à la voie lactée ...
          </h2>
          <div className="description-wrapper">
            <div className="description-jessie">
              <div className="paragraph-content">
                <p>Avec Jessie</p>
                <p className="bold">partout où tu ira</p>
                <p> tu semera le chaos !</p>
              </div>
              <img className="jessie" src={jessieRocket} alt=" jessie" />
            </div>

            <div className="description-miaouss">
              <div className="paragraph-content">
                <p>Miaouss t&apos;accompagne</p>
                <p className="bold"> pour une vengeance </p>
                <p>sans limite !</p>
              </div>
              <img className="miaouss" src={miaoussAlone} alt="Miaouss" />
            </div>

            <div className="description-james">
              <div className="paragraph-content">
                <p>Est-ce La volupté</p>
                <p className="bold"> De la victoire</p>
                <p>que j&apos;entends au loin ?</p>
              </div>
              <img className="james" src={jamesRocket} alt="James" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Acceuil;
