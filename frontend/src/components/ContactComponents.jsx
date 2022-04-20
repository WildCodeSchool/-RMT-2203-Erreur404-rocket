import React from "react";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import imagerocket from "../assets/rocket-recrutment.jpg";
import rocketmobile from "../assets/giovanni-rocket3.png";
function ContactComponents() {
  return (
    <div className="row">
      <Bounce top>
        <img className="rocketmobile" src={rocketmobile} alt="rocketmobile" />
        <img className="rocketimg" src={imagerocket} alt="imagecontact" />
      </Bounce>
      <div className="divcontact">
        <Flip top cascade>
          <h1 className="comeus">Rejoignez nous !</h1>
        </Flip>
        <Fade left>
          <p className="whyrejoinus">
            Envie de rejoindre Jessie et James ?<br />
            Ou encore d&apos;atteindre Giovanni ? Essaye de nous ecrire alors !
            <br />
            Si tu fais preuve d&apos;audace tu peux nous rejoindre...
          </p>
        </Fade>
        <Fade right>
          <p className="whyrejoinus2">
            Tu trouveras tout les elements necessaires
            <br />
            pour tenter de joindre le grand Giovanni ci dessous.
            <br /> Enfin... s&apos;il prends ta demande au sérieux.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default ContactComponents;