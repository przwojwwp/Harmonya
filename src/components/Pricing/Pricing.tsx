import React from "react";

export const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Wybierz pakiet dla swojego biznesu</h2>
          <p>
            Oferujemy elastyczne rozwiązania dopasowane do potrzeb Twojej marki
            wellness
          </p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-header">
              <div className="pricing-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Social Media</h3>
              <div className="pricing-price">
                <span className="price">1900</span>
                <span className="period">/ miesiąc</span>
              </div>
              <p>
                Idealne rozwiązanie dla firm, które chcą profesjonalnie
                zaistnieć w mediach społecznościowych.
              </p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Strategia komunikacji
                </li>
                <li>
                  <i className="fas fa-check"></i> 12 postów miesięcznie
                </li>
                <li>
                  <i className="fas fa-check"></i> Stories 3x w tygodniu
                </li>
                <li>
                  <i className="fas fa-check"></i> Profesjonalne grafiki
                </li>
                <li>
                  <i className="fas fa-check"></i> Angażujące treści
                </li>
                <li>
                  <i className="fas fa-check"></i> Moderacja komentarzy
                </li>
                <li>
                  <i className="fas fa-check"></i> Raport miesięczny
                </li>
                <li className="feature-disabled">
                  <i className="fas fa-times"></i> Kampanie reklamowe
                </li>
                <li className="feature-disabled">
                  <i className="fas fa-times"></i> Sesje zdjęciowe
                </li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#contact" className="btn">
                Wybieram
              </a>
            </div>
          </div>

          <div
            className="pricing-card featured"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="pricing-tag">Polecany</div>
            <div className="pricing-header">
              <div className="pricing-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3>Holistyczna Strategia Widoczności</h3>
              <div className="pricing-price">
                <span className="price">3400</span>
                <span className="period">/ miesiąc</span>
              </div>
              <p>
                Kompleksowe rozwiązanie dla biznesów, które chcą zaistnieć w
                świadomości klientów.
              </p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Strategia komunikacji
                </li>
                <li>
                  <i className="fas fa-check"></i> 16 postów miesięcznie
                </li>
                <li>
                  <i className="fas fa-check"></i> Stories 5x w tygodniu
                </li>
                <li>
                  <i className="fas fa-check"></i> Profesjonalne grafiki
                </li>
                <li>
                  <i className="fas fa-check"></i> Angażujące treści
                </li>
                <li>
                  <i className="fas fa-check"></i> Moderacja komentarzy
                </li>
                <li>
                  <i className="fas fa-check"></i> Raport miesięczny
                </li>
                <li>
                  <i className="fas fa-check"></i> Kampanie reklamowe (budżet
                  reklamowy dodatkowo)
                </li>
                <li>
                  <i className="fas fa-check"></i> Kwartalna sesja zdjęciowa
                </li>
                <li>
                  <i className="fas fa-check"></i> Newsletter (2x w miesiącu)
                </li>
                <li>
                  <i className="fas fa-check"></i> Optymalizacja profili
                </li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#contact" className="btn">
                Wybieram
              </a>
            </div>
          </div>

          <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-header">
              <div className="pricing-icon">
                <i className="fas fa-peace"></i>
              </div>
              <h3>Kampania Reklamowa</h3>
              <div className="pricing-price">
                <span className="price">1500</span>
                <span className="period">/ kampania</span>
              </div>
              <p>
                Idealne uzupełnienie dla firm, które potrzebują szybkiego
                wzrostu rozpoznawalności.
              </p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="fas fa-check"></i> Analiza grupy docelowej
                </li>
                <li>
                  <i className="fas fa-check"></i> Strategia reklamowa
                </li>
                <li>
                  <i className="fas fa-check"></i> Kreacja materiałów
                </li>
                <li>
                  <i className="fas fa-check"></i> Ustawienie i optymalizacja
                </li>
                <li>
                  <i className="fas fa-check"></i> Codzienny monitoring
                </li>
                <li>
                  <i className="fas fa-check"></i> Raport wyników
                </li>
                <li>
                  <i className="fas fa-check"></i> Rekomendacje
                </li>
                <li className="feature-note">
                  * Budżet reklamowy płatny dodatkowo
                </li>
              </ul>
            </div>
            <div className="pricing-cta">
              <a href="#contact" className="btn">
                Wybieram
              </a>
            </div>
          </div>
        </div>

        <div className="pricing-info" data-aos="fade-up" data-aos-delay="400">
          <p>
            Wszystkie pakiety zawierają 3-miesięczny minimalny okres współpracy.
            Możliwość dostosowania pakietów do indywidualnych potrzeb.
          </p>
          <p>
            Nie znalazłeś odpowiedniego pakietu?{" "}
            <a href="#contact">Skontaktuj się z nami</a>, przygotujemy
            indywidualną ofertę.
          </p>
        </div>
      </div>
    </section>
  );
};
