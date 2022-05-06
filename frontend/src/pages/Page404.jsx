import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

import Video from "../components/Video";
import rocketmongolfiere from "../assets/rocket-mongolfiere.jpg";
import teamrocketball from "../assets/team-rocket ball.png";

import "../styles/Video.css";
import "../styles/Page404.css";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 15000);
  }, []);
  return (
    <div className="maincontainer">
      <Video className="videoautoplay" />

      <Slide>
        <div className="partie1">
          <div className="erreur">
            <b>4</b>
            <img src={teamrocketball} alt="" />
            <b>4</b>
          </div>
          <h1>Oups... une fois de plus la Team s&apos;envole!</h1>
        </div>
      </Slide>
      <Slide>
        <div className="partie2">
          <h2> Mais pas de panique, tu peux retenter ta chance!</h2>

          <img
            className="mongolfiere"
            src={rocketmongolfiere}
            alt="rocketmongolfiere"
          />
        </div>
      </Slide>
    </div>
  );
}

export default Page404;
