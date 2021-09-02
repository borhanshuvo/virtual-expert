import emailjs from "emailjs-com";
import Head from "next/head";
import React from "react";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bnwytsn",
        "template_mi5fgyh",
        e.target,
        "user_SWFeTeBulzLsvOS4miuh4"
      )
      .then(
        (result) => {},
        (error) => {}
      );
  }
  return (
    <>
      <Head>
        <title>Virtual Experts | Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
  );
};

export default ContactUs;
