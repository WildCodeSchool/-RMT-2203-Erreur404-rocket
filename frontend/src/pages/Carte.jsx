import React from "react";

import "../styles/Carte.css";

import Mapper from "@components/MapContainer";

function Carte() {
  return (
    <div className="mapContainer">
      <h1>Carte</h1>
      <Mapper />
    </div>
  );
}

export default Carte;
