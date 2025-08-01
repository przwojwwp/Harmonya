import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-content" data-aos="fade-up">
          <h2>Gotowy na transformację swojego biznesu?</h2>
          <p>
            Skontaktuj się z nami i rozpocznij swoją podróż z profesjonalnym
            marketingiem dla branży wellness.
          </p>

          <div className="cta-form-container">
            <form id="contactForm" className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko*</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Nazwa firmy*</label>
                  <input type="text" id="company" name="company" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Wiadomość*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="form-group form-checkbox">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  kontaktu.*
                </label>
              </div>
              <button type="submit" className="btn">
                Wyślij zapytanie
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:kontakt@harmonya.pl">kontakt@harmonya.pl</a>
              </p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <h3>Telefon</h3>
              <p>
                <a href="tel:+48500600700">+48 500 600 700</a>
              </p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Adres</h3>
              <p>
                ul. Harmonijna 42
                <br />
                00-001 Warszawa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-decoration"></div>
    </section>
  );
};
