import React from "react";
import teamRocketball from "../assets/team-rocket ball.png";

function Séparateur() {
  return (
    <div className="separation">
      <hr className="separateur" />
      <img className="rocketball" src={teamRocketball} alt="rocketball" />
      <hr className="separateur" />
    </div>
  );
}

export default Séparateur;
