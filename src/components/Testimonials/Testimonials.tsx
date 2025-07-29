export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Co mówią nasi klienci</h2>
          <p>
            Zobacz, jak współpraca z nami wpłynęła na rozwój biznesów naszych
            klientów
          </p>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-slider" id="testimonialsSlider">
            <div className="testimonial-slide" data-aos="fade-up">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    Współpraca z Harmonya Agency całkowicie odmieniła mój
                    biznes. Ich holistyczne podejście do marketingu pozwoliło mi
                    dotrzeć do nowej grupy klientów, a moje social media w końcu
                    wyglądają profesjonalnie i spójnie.
                  </p>
                  <div className="testimonial-author">
                    <h4>Anna Kowalska</h4>
                    <p>Studio Jogi "Spokój"</p>
                  </div>
                </div>
                <div className="testimonial-image">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Anna Kowalska - Studio Jogi Spokój"
                  />
                </div>
              </div>
            </div>

            <div
              className="testimonial-slide"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    Najbardziej cenię ich zaangażowanie i zrozumienie specyfiki
                    branży wellness. Czuję, że mój marketing jest w dobrych
                    rękach, a ja mogę skupić się na pracy z klientami, zamiast
                    martwić się o Instagram czy newslettery.
                  </p>
                  <div className="testimonial-author">
                    <h4>Marek Nowak</h4>
                    <p>Centrum Holistyczne "Harmonia"</p>
                  </div>
                </div>
                <div className="testimonial-image">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Marek Nowak - Centrum Holistyczne Harmonia"
                  />
                </div>
              </div>
            </div>

            <div
              className="testimonial-slide"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    Efekty naszej współpracy przerosły moje oczekiwania. W ciągu
                    3 miesięcy liczba klientów wzrosła o 40%, a moja marka
                    zyskała wyrazisty charakter i rozpoznawalność wśród
                    odbiorców.
                  </p>
                  <div className="testimonial-author">
                    <h4>Karolina Wiśniewska</h4>
                    <p>Gabinet Naturalnej Terapii "Natura"</p>
                  </div>
                </div>
                <div className="testimonial-image">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Karolina Wiśniewska - Gabinet Naturalnej Terapii Natura"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-arrow prev" id="prevTestimonial">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="testimonial-dots" id="testimonialDots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="testimonial-arrow next" id="nextTestimonial">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div
          className="video-testimonial"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>Zobacz videoopinię naszego klienta</h3>
          <div className="video-container">
            <div className="video-placeholder">
              <img src="/api/placeholder/800/450" alt="Video Testimonial" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
