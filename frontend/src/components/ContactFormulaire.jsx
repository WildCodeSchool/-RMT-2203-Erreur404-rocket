import React from "react";

import { Bounce } from "react-awesome-reveal";

import { Link } from "react-router-dom";

import pika from "../assets/pikachu-team-rocket.png";

function ContactFormulaire() {
  return (
    <Bounce>
      <div className="formcontact1">
        <img className="pikamobile" src={pika} alt="pikachu" />
        <img className="pika" src={pika} alt="pikachu" />
        <div className="card">
          <form method="POST" name="contactform" className="contactForm">
            <h1 className="h1contact">N&aposattends plus</h1>

            <input
              type="text"
              name="name"
              placeholder="Commence par ton prenom"
            />

            <input
              type="email"
              name="email"
              placeholder="Et maintenant ton email !"
            />

            <input
              type="text"
              name="subject"
              placeholder="La raison de ta demande ?"
            />

            <textarea
              className="textcontact"
              name="message"
              placeholder="Tu peux nous écrire"
            />

            <button className="pcontact" type="submit">
              <Link to="/404" className="linkStyle">
                <p className="pcontact">Je contacte la team rocket !</p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </Bounce>
  );
}

export default ContactFormulaire;
