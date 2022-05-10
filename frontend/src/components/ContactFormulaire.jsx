import React from "react";

import EmailJS from "./EmailJS";

import pika from "../assets/pikachu-team-rocket.png";

function ContactFormulaire() {
  return (
      <div className="formcontact1">
        <img className="pikamobile" src={pika} alt="pikachu" />
        <img className="pika" src={pika} alt="pikachu" />
        <EmailJS />
      </div>
  );
}

export default ContactFormulaire;
