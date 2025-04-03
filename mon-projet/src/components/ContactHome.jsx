import React from "react";
import "../styles/ContactHome.css";
import { MdContactPhone } from "react-icons/md";

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
              <MdContactPhone /> 02 40 73 64 89
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
