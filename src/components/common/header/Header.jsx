import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Acasă</Link>
            </li>
            <li>
              <Link to="/cursuri">Cursuri</Link>
            </li>
            <li>
              <Link to="/desprenoi">Despre noi</Link>
            </li>

            <li>
              <Link to="/preturi">Prețuri</Link>
            </li>
            <li>
              <Link to="/jurnal">Jurnal</Link>
            </li>
            <li>
              <Link to="/povestea">Povestea ta</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">PRIMEȘTE CERTIFICAT</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
