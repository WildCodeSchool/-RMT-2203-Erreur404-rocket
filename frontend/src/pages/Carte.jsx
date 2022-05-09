import React, { useContext } from "react";
import Mapper from "@components/Mapper";

import ExportContext from "../contexts/PanierContext";
import Séparateur from "../components/Séparateur";
import MapCard from "../components/MapCard";

import jessie from "../assets/jessie-alone2.png";
import james from "../assets/james-alone.png";
import Banniere from "../components/Banniere";

import "../styles/Carte.css";

function Carte() {
  const { monPanier } = useContext(ExportContext.PanierContext);
  return (
    <div>
      <Banniere />
      <div className="mapContainer">
        <h1 className="title-map">Carte</h1>
        <Séparateur />
        <div className="flex-map-container">
          <div className="img-flex">
            <img className="james-alone" src={james} alt="James" />
            <img className="jessie-alone" src={jessie} alt="James" />
            <Mapper />
          </div>
          <div className="map-pokemon-container">
            {monPanier.map((pokemon) => (
              <MapCard pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;
