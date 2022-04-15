import React from "react";
import imagerocket from "../assets/rocket-recrutment.jpg";

function ContactComponents() {
  return (
    <div className="row">
      <img className="rocketimg" src={imagerocket} alt="imagecontact" />
      <div className="divcontact">
        <h1 className="comeus">Rejoignez nous !</h1>
        <p className="whyrejoinus">
          Envie de rejoindre Jessie et James ?<br />
          Ou encore d&apos;atteindre Giovanni ? Essaye de nous ecrire alors !
          <br />
          Si tu fais preuve d&apos;audace tu peux nous rejoindre...
        </p>
        <p className="whyrejoinus2">
          Tu trouveras tout les elements necessaires
          <br />
          pour tenter de joindre le grand Giovanni ci dessous.
          <br /> Enfin... s&apos;il prends ta demande au sérieux.
        </p>
      </div>
    </div>
  );
}

export default ContactComponents;
