import React from "react";
import Mapper from "@components/Mapper";

import "../styles/Carte.css";

function Carte() {
  return (
    <div className="mapContainer">
      <h1>Carte</h1>
      <Mapper />
    </div>
  );
}

export default Carte;
