import React from "react";

export const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="hero-tagline">Harmonya agency</div>
          <h1>
            Tworzymy <span className="gold-text">w zgodzie</span> z Tobą
          </h1>
          <p className="hero-description">
            Profesjonalne wsparcie marketingowe dla branży wellness. Rozwijaj
            swój biznes z zespołem, który rozumie Twoją wizję i potrzeby.
          </p>
          <div className="hero-cta">
            <a href="#pricing" className="btn">
              Sprawdź ofertę
            </a>
            <a href="#benefits" className="btn btn-outline">
              Poznaj korzyści
            </a>
          </div>
        </div>
        <div className="hero-image">
          <figure>
            <img src="img/me.jpeg" alt="" />
          </figure>
        </div>
      </div>
      <div className="hero-decoration"></div>
      <div className="hero-decoration"></div>
      <div className="hero-decoration"></div>
    </section>
  );
};
