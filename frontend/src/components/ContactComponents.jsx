import React from "react";

import { Slide, Fade } from "react-awesome-reveal";

import Séparateur from "./Séparateur";

import imagerocket from "../assets/rocket-recrutment.jpg";
import rocketmobile from "../assets/giovanni-rocket3.png";

function ContactComponents() {
  return (
    <div className="row">
      <div className="row-col-1">
        <Slide triggerOnce>
          <img className="rocketmobile" src={rocketmobile} alt="rocketmobile" />
          <img className="rocketimg" src={imagerocket} alt="imagecontact" />
        </Slide>
      </div>
      <div className="divcontact">
        <Slide triggerOnce>
          <h1 className="comeus">Rejoignez nous !</h1>
        </Slide>
        <Fade delay={1000}>
          <p className="whyrejoinus">
            Envie de rejoindre Jessie et James ?<br />
            Ou encore d&apos;atteindre Giovanni ? Essaye de nous ecrire alors !
            <br />
            Si tu fais preuve d&apos;audace tu peux nous rejoindre...
          </p>
        </Fade>
        <Fade delay={2000}>
          <p className="whyrejoinus2">
            Tu trouveras tout les elements necessaires
            <br />
            pour tenter de joindre le grand Giovanni ci dessous.
            <br /> Enfin... s&apos;il prends ta demande au sérieux.
          </p>
        </Fade>
        <Séparateur />
      </div>
    </div>
  );
}

export default ContactComponents;
