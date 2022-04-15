import React from "react";
import ImageMapper from "react-img-mapper";

import "../styles/Carte.css";

function Mapper() {
  const URL = "https://i.ibb.co/5xC95ft/Map.png";
  const MAP = {
    name: "Kantho",
    style: "Width=640",
    areas: [
      {
        id: "1",
        title: "Road 1",
        shape: "rect",
        name: "Road 1",
        fillColor: "#CD5C5C",
        strokeColor: "black",
        coords: [114, 375, 130, 308],
        active: true,
      },
      {
        id: "2",
        title: "Road 2",
        shape: "rect",
        name: "Road 2",
        fillColor: "#CD5C5C",
        strokeColor: "black",
        coords: [114,275,130,200],
        active: true,
      },
    ],
  };
  return (
    <ImageMapper
      className="map"
      src={URL}
      map={MAP}
      fillColor="#CD5C5C"
      toggleHighlighted
      stayHighlighted
      width={640}
      height={557}
    />
  );
}

export default Mapper;
