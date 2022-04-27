import React from "react";
import ImageMapper from "react-img-mapper";
import areaSelected from "../data/MapArea";

import "../styles/Carte.css";

function Mapper() {
  const URL = "https://i.ibb.co/5xC95ft/Map.png";
  const MAP = {
    name: "Kantho",
    style: "Width=640",
    areas: areaSelected,
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
