export const BeforeAfter = () => {
  return (
    <section id="before-after" className="before-after section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Transformacje, które tworzymy</h2>
          <p>
            Zobacz różnicę, jaką możemy wnieść do Twojej obecności w mediach
            społecznościowych
          </p>
        </div>

        <div
          className="comparison-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="comparison-slider">
            <div className="comparison-item">
              <div className="comparison-labels">
                <span className="before-label">Przed</span>
                <span className="after-label">Po</span>
              </div>
              <div className="comparison-images">
                <div className="before-image">
                  <img
                    src="/api/placeholder/600/600"
                    alt="Przed współpracą - Instagram feed"
                  />
                </div>
                <div className="after-image">
                  <img
                    src="/api/placeholder/600/600"
                    alt="Po współpracy - Instagram feed"
                  />
                </div>
                <div className="comparison-slider-handle">
                  <i className="fas fa-chevron-left"></i>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <p className="comparison-caption">
                Instagram feed klienta z branży wellness
              </p>
            </div>
          </div>

          <div className="transformation-description">
            <h3>
              Spójny i <span className="gold-text">profesjonalny</span>{" "}
              wizerunek
            </h3>
            <p>
              Tworzymy strategiczną komunikację wizualną, która wyróżnia Twoją
              markę i buduje profesjonalny wizerunek, przyciągający właściwych
              klientów.
            </p>
            <ul className="transformation-benefits">
              <li>
                <i className="fas fa-check-circle"></i> Spójna kolorystyka i
                estetyka
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Przemyślane kadry i
                kompozycje
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Zaplanowana strategia
                contentu
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Profesjonalna edycja
                zdjęć
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
