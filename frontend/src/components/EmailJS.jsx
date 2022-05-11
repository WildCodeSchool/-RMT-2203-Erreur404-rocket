import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Bounce } from "react-awesome-reveal";

import * as yup from "yup";
import emailjs from "@emailjs/browser";

function EmailJS() {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required("Merci de rentrer votre nom et prénom"),
      email: yup
        .string()
        .email("Merci de renter une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail"),
      phone: yup
        .number()
        .typeError("Merci de rentrer une numero de téléphone valide")
        .required("Merci de rentrer un numero de téléphone"),
      message: yup.string().required("Merci de rentrer un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "DRRoxZ0G-QI1BDlKE")
      .then(() => {
        console.warn("succes");
      })
      .catch(() => console.error("Il y a une erreur"));
  };

  const onSubmit = (data, r) => {
    alert("Merci pour votre message, il sera traité au plus vite !"); // eslint-disable-line
    const templateId = "template_tyu8t2f";
    const serviceId = "service_09irryu";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      city: data.city,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  return (
    <Bounce>
      <div>
        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="label-contact">
            Nom et Prenom :
            <input
              className="input-contact"
              type="text"
              id="name"
              nanme="name"
              placeholder="Renseignez votre nom et prénom"
              {...register("name")}
            />
          </label>
          {errors.name && <p id="c-yup">{errors.name.message}</p>}
          <label htmlFor="email" className="label-contact">
            Adresse mail :
            <input
              className="input-contact"
              type="email"
              id="email"
              nanme="email"
              placeholder="exemple@gmail.com"
              {...register("email")}
            />
          </label>
          {errors.email && <p id="c-yup">{errors.email.message}</p>}
          <label htmlFor="phone" className="label-contact">
            N° Téléphone :
            <input
              className="input-contact"
              type="text"
              id="phone"
              nanme="phone"
              placeholder="+33 XXX XXX"
              {...register("phone")}
            />
          </label>
          {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
          <label htmlFor="Sujet" className="label-contact">
            Sujet :
            <select
              className="select-contact"
              name="Subject"
              {...register("subject")}
            >
              <option defaultValue>
                Selectionner l&apos;objet de la demande
              </option>
              <option value="Rejoindre la team rocket">
                Rejoindre la team rocket
              </option>
              <option value="Rencontrer Giovanni">Rencontrer Giovanni</option>
              <option value="Autre">Autre</option>
            </select>
          </label>
          <label htmlFor="Ville" className="label-contact">
            Votre ville :
            <select
              className="select-contact"
              name="City"
              {...register("city")}
            >
              <option defaultValue>Selectionner votre ville</option>
              <option value="Jadielle">Jadielle</option>
              <option value="Argenta">Argenta</option>
              <option value="Parmanie">Parmanie</option>
              <option value="Autéquia">Autéquia</option>
              <option value="Atalanopolis">Atalanopolis</option>
              <option value="Éternara">Éternara</option>
              <option value="Pacifiville">Pacifiville</option>
              <option value="Mauville">Mauville</option>
              <option value="Écorcia">Écorcia</option>
              <option value="Irisia">Irisia</option>
              <option value="Autre">Autre</option>
            </select>
          </label>
          <label htmlFor="message" className="label-contact">
            Message :
            <textarea
              className="message-contact"
              placeholder="On espère que cela sera constructif"
              id="message"
              cols="20"
              rows="10"
              name="message"
              {...register("message")}
            />
          </label>
          {errors.message && <p id="c-yup">{errors.message.message}</p>}
          <button className="button-contact" type="submit" value="Envoyer">
            <p className="pcontact">Je contacte la team rocket ! </p>
          </button>
        </form>
      </div>
    </Bounce>
  );
}

export default EmailJS;
