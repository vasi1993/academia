import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="BUN VENIT LA ACADEMIA"
              title="Educație Online la cel mai înalt nivel"
            />
            <p>
              Educația nu este pregătirea pentru viață, educația este viață
              însăși.
            </p>
            <div>
              <button className="primary-btn">
                ÎNCEPE ACUM <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VEZI CURSURI <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
