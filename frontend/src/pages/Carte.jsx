import React from "react";
import Mapper from "@components/Mapper";

import pokemonSelected from "../data/pokemonSelected";
import MapCard from "../components/MapCard";
import teamRocketball from "../assets/team-rocket ball.png";
import jessie from "../assets/jessie-alone2.png";
import james from "../assets/james-alone.png";

import "../styles/Carte.css";

function Carte() {
  return (
    <div>
      <div className="mapContainer">
        <h1>Carte</h1>

        <div className="separation">
          <hr className="separateur" />
          <img className="rocketball" src={teamRocketball} alt="rocketball" />
          <hr className="separateur" />
        </div>

        <div className="flex-map-container">
          <div className="img-flex">
            <img className="james-alone" src={james} alt="James" />
            <img className="jessie-alone" src={jessie} alt="James" />
            <Mapper />
          </div>
          <div className="map-pokemon-container">
            {pokemonSelected.map((pokemon) => (
              <MapCard pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;
