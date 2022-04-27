import React from "react";
import ImageMapper from "react-img-mapper";

import areaSelected from "../data/areaSelected";
import pokemonSelected from "../data/pokemonSelected";

import "../styles/Carte.css";

function Mapper() {
  const areaTemp = areaSelected.filter((area) => {
    let result = false;
    pokemonSelected.forEach((pokemon) => {
      if (pokemon.area.includes(area.id)) result = true;
    });
    return result;
  });

  const URL = "https://i.ibb.co/5xC95ft/Map.png";
  const MAP = {
    name: "Kantho",
    style: "Width=640",
    areas: areaTemp,
  };
  return (
    <ImageMapper
      className="map"
      src={URL}
      map={MAP}
      fillColor="#CD5C5C"
      toggleHighlighted
      stayHighlighted
      stayMultiHighlighted
      width={640}
      height={557}
    />
  );
}

export default Mapper;
