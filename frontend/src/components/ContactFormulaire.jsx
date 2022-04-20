import React from "react";
import pika from "../assets/pikachu-team-rocket.png";

function ContactFormulaire() {
  return (
    <div className="formcontact1">
      <img className="pikamobile" src={pika} alt="pikachu" />
      <img className="pika" src={pika} alt="pikachu" />
      <div className="card">
        <form method="POST" name="contactform" className="contactForm">
          <h1 className="h1contact">N&apos;attends plus</h1>

          <input
            type="text"
            name="name"
            placeholder="Commence par ton prenom..."
          />

          <input
            type="email"
            name="email"
            placeholder="Et maintenant ton email !"
          />

          <textarea
            className="textcontact"
            name="message"
            placeholder="Tu peux nous écrire"
          />

          <button className="pcontact" type="submit">
            Je contacte la team rocket
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactFormulaire;
