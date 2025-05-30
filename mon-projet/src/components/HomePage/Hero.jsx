import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroBg from "../../assets/photos/Home/A_photograph_captures_a_Wallace_Fountain_situated_.webp";
import logoNeptuneBlanc from "../../assets/logo/logo_neptune_blanc.svg";
import "../../styles/HomePage/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Neptune Arrosage - Expert en arrosage automatique</title>
        <meta
          name="description"
          content="Neptune Arrosage, expert en solutions d'arrosage automatique et aménagement hydraulique depuis 1970."
        />
        <meta property="og:image" content={logoNeptuneBlanc} />
        <meta property="og:image:alt" content="Logo Neptune Arrosage" />
        <link
          rel="preload"
          as="image"
          href={logoNeptuneBlanc}
          type="image/svg+xml"
        />
      </Helmet>

      <section
        className="hero-section"
        aria-label="Présentation de Neptune Arrosage"
        itemScope
        itemType="https://schema.org/WPHeader"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-container">
          <div
            className="hero-content"
            data-aos="fade-up"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <img
              src={logoNeptuneBlanc}
              alt="Logo Neptune Arrosage - Expert en arrosage automatique depuis 1970"
              data-aos="zoom-in"
              data-aos-delay="100"
              loading="eager"
              itemProp="logo"
              width={305}
              height={131}
            />

            <div
              className="hero-tagline"
              data-aos="fade-up"
              data-aos-delay="300"
              itemProp="slogan"
            >
              EXPERT EN SOLUTIONS
            </div>

            <h1 className="hero-title" itemProp="name">
              <span
                className="hero-title-line"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Arrosage &amp;
              </span>
              <span
                className="hero-title-line"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                aménagement
              </span>
              <span
                className="hero-title-line"
                data-aos="fade-right"
                data-aos-delay="900"
              >
                hydraulique
              </span>
              <span
                className="hero-title-line"
                data-aos="fade-right"
                data-aos-delay="1100"
                itemProp="foundingDate"
              >
                Depuis 1970
              </span>
            </h1>

            <div className="hero-cta" data-aos="zoom-in" data-aos-delay="1100">
              <button
                className="hero-button"
                onClick={() => navigate("/contact")}
                aria-label="Contactez Neptune Arrosage pour un devis"
                itemProp="potentialAction"
              >
                Une demande, un projet ?
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
