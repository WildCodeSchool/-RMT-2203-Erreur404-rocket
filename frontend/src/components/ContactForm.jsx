import React from "react";
import pokeball from "../assets/pokeball2.png";
import ContactFormulaire from "./ContactFormulaire";

function ContactForm() {
  return (
    <div className="row1">
      <ContactFormulaire />
      <div className="row2">
        <h1 className="contactus">Contactez nous</h1>
        <address className="adress">
          <p>Notre email : recrutement@teamrocket.fr</p>
          <br />
          <p>Téléphone : +00 XXX XXX</p>
        </address>
        <p className="p2">
          Lorem ipsum dolor sit amet. <br /> Est libero consectetur aut maxime
          suscipit
          <br /> est saepe esse non molestiae eligendi non impedit repellat.{" "}
          <br />
          Sed vero sapiente et tenetur velit qui libero distinctio eos pariatur
          eveniet.{" "}
        </p>
        <img className="pokeball" src={pokeball} alt="pokeballanimate" />
      </div>
    </div>
  );
}

export default ContactForm;
