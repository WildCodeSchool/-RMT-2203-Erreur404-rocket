import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_09irryu', 'template_tyu8t2f', form.current, 'DRRoxZ0G-QI1BDlKE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contactForm">
      <label>Votre nom</label>
      <input type="text" name="user_name" />
      <label>Votre email</label>
      <input type="email" name="user_email" />
      <label>Et pour finir votre message !</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};