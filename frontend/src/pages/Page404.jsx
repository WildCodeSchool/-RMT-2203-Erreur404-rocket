import React from "react";

import rocketmongolfiere from "../assets/rocket-mongolfiere.jpg";

import "../styles/Page404.css";

function Page404() {
  return (
    <div className="maincontainer">
      <div className="section1">
        <h1>Error</h1>

        <p>
          4<span>a</span>4
        </p>
        <h2>Oups! La Team Rocket revient</h2>
      </div>

      <div className="rocket-mongolfiere">
        <img
          className="mongolfiere"
          src={rocketmongolfiere}
          alt="rocketmongolfiere"
        />
      </div>
    </div>
  );
}

export default Page404;
