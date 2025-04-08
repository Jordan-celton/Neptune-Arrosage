import React from "react";
import "../styles/ContactHome.css";
import icon from "../assets/icons/picto_casque_tel.svg";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner__container">
        <h1 className="contact-banner__title">
          Neptune arrosage est à votre écoute
        </h1>
        <div className="contact-banner__content">
          <div className="contact-banner__contact-info">
            <p className="contact-banner__phone">
              {" "}
              <img src={icon} className="picto-casque" alt="" srcSet="" /> 02 40
              73 64 89
            </p>
            <button className="contact-banner__button">
              Discuter de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
