import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomePage/ContactHome.css";
import icon from "../../assets/icons/picto_casque_tel.svg";

const ContactBanner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="contact-banner"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="contact-banner__container">
        <h1
          className="contact-banner__title"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          Neptune arrosage est à votre écoute
        </h1>
        <div className="contact-banner__content">
          <div
            className="contact-banner__contact-info"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <p className="contact-banner__phone">
              <img
                src={icon}
                className="picto-casque"
                alt="Icône téléphone"
                aria-hidden="true"
              />{" "}
              02 40 73 64 89
            </p>
            <button
              className="contact-banner__button"
              onClick={() => navigate("/contact")}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Discuter de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
