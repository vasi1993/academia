import React, { useRef } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_lte9bxe",
      "template_yo5p2ek",
      e.target,
      "oLynzax2LDZf03Iy7"
    );
    e.target.reset();
  };

  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.6607621122744!2d23.809314076034067!3d46.55439716004308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474966482806ab41%3A0x4c9bac3fa2f0be07!2sStrada%20Panselu%C5%A3elor%2C%20Turda!5e0!3m2!1sro!2sro!4v1687975873093!5m2!1sro!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade ';
  return (
    <>
      <Back title="Contact" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact</h1>
            <p>Suntem deschiși oricărei sugestii</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADRESA:</h4>
                <p>Panselutelor nr 2, Cluj-Napoca</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> infoacademia@gmail.com</p>
              </div>
              <div className="box">
                <h4>Telefon:</h4>
                <p> 0264331332</p>
              </div>
            </div>

            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="flexSB">
                <input type="text" name="email_name" placeholder="Nume" />
                <input type="email" name="email_from" placeholder="Email" />
              </div>
              <input type="text" name="email_subject" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                name="message"
                placeholder="Scrieti un mesaj aici..."
              ></textarea>
              <button type="submit" className="primary-btn">
                TRIMITE MESAJ
              </button>
            </form>

            <h3>Urmărește-ne aici</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
