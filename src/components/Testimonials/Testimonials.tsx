import { useEffect, useState } from "react";
import styles from "./Testimonials.module.scss";
import cn from "classnames";

const testimonials = [
  {
    id: "anna-kowalska",
    text: `
      Współpraca z Harmonya Agency całkowicie odmieniła mój biznes.
      Ich holistyczne podejście do marketingu pozwoliło mi dotrzeć do nowej grupy klientów,
      a moje social media w końcu wyglądają profesjonalnie i spójnie.`,
    author: "Anna Kowalska",
    role: `Studio Jogi "Spokój"`,
  },
  {
    id: "marek-nowak",
    text: `
      Najbardziej cenię ich zaangażowanie i zrozumienie specyfiki branży wellness.
      Czuję, że mój marketing jest w dobrych rękach, a ja mogę skupić się na pracy z klientami,
      zamiast martwić się o Instagram czy newslettery.`,
    author: "Marek Nowak",
    role: `Centrum Holistyczne "Harmonia"`,
  },
  {
    id: "karolina-wisniewska",
    text: `
      Efekty naszej współpracy przerosły moje oczekiwania.
      W ciągu 3 miesięcy liczba klientów wzrosła o 40%, a moja marka
      zyskała wyrazisty charakter i rozpoznawalność wśród odbiorców.`,
    author: "Karolina Wiśniewska",
    role: `Gabinet Naturalnej Terapii "Natura"`,
  },
];

const adjustedTestimonials = [...testimonials, testimonials[0]];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex !== adjustedTestimonials.length - 1) return;

    const timeout = setTimeout(() => {
      setActiveIndex(0);
    }, 700);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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

        <div
          className={cn(styles["testimonials-slider"], {
            [styles["no-transition"]]: activeIndex === 0,
          })}
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div
            className={cn(styles["testimonials-track"], {
              [styles["no-transition"]]: activeIndex === 0,
            })}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            id="testimonialsSlider"
          >
            {adjustedTestimonials.map((item) => (
              <div
                key={`testimonial+${item.id}`}
                className={styles["testimonial-slide"]}
              >
                <div className={styles["testimonial-content"]}>
                  <div className={styles["testimonial-text"]}>
                    <i
                      className={cn(
                        "fas",
                        "fa-quote-left",
                        styles["quote-icon"]
                      )}
                    ></i>
                    <p>{item.text}</p>
                    <i
                      className={cn(
                        "fas",
                        "fa-quote-right",
                        styles["quote-icon"]
                      )}
                    ></i>
                  </div>
                  <div className={styles["testimonial-person"]}>
                    <div className={styles["testimonial-image"]}>
                      <img src="img/me.jpeg" alt={item.author} />
                    </div>
                    <div className={styles["testimonial-author"]}>
                      <h4>{item.author}</h4>
                      <p>{item.role}</p>
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
                  key={`dot+${index}`}
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

        {/* <div
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
        </div> */}
      </div>
    </section>
  );
};
