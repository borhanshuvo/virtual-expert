import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_esd6cuw',
        'template_peizayb',
        e.target,
        'user_IPQt7Bei466UeZ7tBO084'
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
