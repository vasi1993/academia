import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Rămâi conectat și primește ultimele oferte</h1>
          </div>
          <div className="right row">
            <input type="text" placeholder="email" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>EDUCAȚIE ONLINE</span>
            <p>
              A învăţa cum să înveţi este cea mai importantă deprindere din
              viaţă.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explorează</h3>
            <ul>
              <li>Despre noi</li>
              <li>Servicii</li>
              <li>Cursuri</li>
              <li>Blog</li>
              <li>Contactează-ne</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Link</h3>
            <ul>
              <li>Contactează-ne</li>
              <li>Preț</li>
              <li>Termeni și Condiții</li>
              <li>Privat</li>
              <li>Recenzii</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Contactează-ne</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Strada Panseluțelor nr 2, Turda, Cluj
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                0264331332
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                infoacademia@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
