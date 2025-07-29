import { useState } from "react";
import styles from "./Testimonials.module.scss";
import cn from "classnames";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: `
      Współpraca z Harmonya Agency całkowicie odmieniła mój biznes.
      Ich holistyczne podejście do marketingu pozwoliło mi dotrzeć do nowej grupy klientów,
      a moje social media w końcu wyglądają profesjonalnie i spójnie.`,
      author: "Anna Kowalska",
      role: `Studio Jogi "Spokój"`,
    },
    {
      text: `
      Najbardziej cenię ich zaangażowanie i zrozumienie specyfiki branży wellness.
      Czuję, że mój marketing jest w dobrych rękach, a ja mogę skupić się na pracy z klientami,
      zamiast martwić się o Instagram czy newslettery.`,
      author: "Marek Nowak",
      role: `Centrum Holistyczne "Harmonia"`,
    },
    {
      text: `
      Efekty naszej współpracy przerosły moje oczekiwania.
      W ciągu 3 miesięcy liczba klientów wzrosła o 40%, a moja marka
      zyskała wyrazisty charakter i rozpoznawalność wśród odbiorców.`,
      author: "Karolina Wiśniewska",
      role: `Gabinet Naturalnej Terapii "Natura"`,
    },
  ];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={cn(styles.testimonials, styles.section)}
    >
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Co mówią nasi klienci</h2>
          <p>
            Zobacz, jak współpraca z nami wpłynęła na rozwój biznesów naszych
            klientów
          </p>
        </div>

        <div className={styles["testimonials-wrapper"]}>
          <div
            className={styles["testimonials-slider"]}
            id="testimonialsSlider"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={cn(
                  styles["testimonial-slide"],
                  index !== activeIndex && styles.hidden
                )}
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className={styles["testimonial-content"]}>
                  <div className={styles["testimonial-text"]}>
                    <div className={styles["testimonial-text"]}>
                      <i
                        className={cn(
                          "fas",
                          "fa-quote-left",
                          styles["quote-icon"]
                        )}
                      ></i>
                      <p>{item.text}</p>
                      <div className={styles["testimonial-author"]}>
                        <h4>{item.author}</h4>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <div className={styles["testimonial-image"]}>
                      <img src="/api/placeholder/300/300" alt={item.author} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["testimonial-controls"]}>
            <button
              className={cn(styles["testimonial-arrow"], styles.prev)}
              id="prevTestimonial"
              onClick={prevSlide}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className={styles["testimonial-dots"]} id="testimonialDots">
              {testimonials.map((_, index) => (
                <span
                  className={cn(
                    styles.dot,
                    index === activeIndex && styles.active
                  )}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button
              className={cn(styles["testimonial-arrow"], styles.next)}
              id="nextTestimonial"
              onClick={nextSlide}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div
          className={styles["video-testimonial"]}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>Zobacz videoopinię naszego klienta</h3>
          <div className={styles["video-container"]}>
            <div className={styles["video-placeholder"]}>
              <img src="/api/placeholder/800/450" alt="Video Testimonial" />
              <div className={styles["play-button"]}>
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
