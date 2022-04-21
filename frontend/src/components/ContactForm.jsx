import React from "react";

import { Fade } from "react-awesome-reveal";

import ContactFormulaire from "./ContactFormulaire";

import pokeball from "../assets/team-rocket ball2.png";

function ContactForm() {
  return (
    <div className="row1">
      <ContactFormulaire />
      <div className="row2">
        <h1 className="contactus">Contactez nous</h1>
        <address className="adress">
          <p>Notre email : recrutement@teamrocket.fr</p>
          <br />
          <p>Téléphone : +33 15412563</p>
        </address>
        <p className="p2">
          Et voilà tu as toutes nos infos.
          <br />
          Libre à toi désormais de nous contacter.
          <br />
          N&apos;oublie pas que nous recherchons régulierement des combattants !
          <br />
          Mais que nous ne sommes pas non plus dans le besoin.
        </p>
        <Fade delay={1500}>
          <img className="pokeball" src={pokeball} alt="pokeballanimate" />
        </Fade>
      </div>
    </div>
  );
}

export default ContactForm;
