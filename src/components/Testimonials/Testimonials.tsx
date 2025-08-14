import styles from "./Testimonials.module.scss";
import cn from "classnames";
import { useTestimonialsSlider } from "./hooks/useTestimonialsSlider";

const testimonials = [
  {
    id: "anna-kowalska",
    text: `Współpraca z Harmonya Agency całkowicie odmieniła mój biznes.
    Ich holistyczne podejście do marketingu pozwoliło mi dotrzeć do nowej grupy klientów,
    a moje social media w końcu wyglądają profesjonalnie i spójnie.`,
    author: "Anna Kowalska",
    role: `Studio Jogi "Spokój"`,
  },
  {
    id: "marek-nowak",
    text: `Najbardziej cenię ich zaangażowanie i zrozumienie specyfiki branży wellness.
    Czuję, że mój marketing jest w dobrych rękach, a ja mogę skupić się na pracy z klientami,
    zamiast martwić się o Instagram czy newslettery.`,
    author: "Marek Nowak",
    role: `Centrum Holistyczne "Harmonia"`,
  },
  {
    id: "karolina-wisniewska",
    text: `Efekty naszej współpracy przerosły moje oczekiwania.
    W ciągu 3 miesięcy liczba klientów wzrosła o 40%, a moja marka
    zyskała wyrazisty charakter i rozpoznawalność wśród odbiorców.`,
    author: "Karolina Wiśniewska",
    role: `Gabinet Naturalnej Terapii "Natura"`,
  },
];

const wrappedTestimonials = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

export const Testimonials = () => {
  const {
    visibleIndex,
    isTransitioning,
    realIndex,
    handleNext,
    handlePrev,
    goTo,
    fixLoopAfterTransition,
  } = useTestimonialsSlider(testimonials.length);

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

        <div className={styles["testimonials-slider"]} data-aos="fade-up">
          <div
            className={cn(styles["testimonials-track"], {
              [styles["no-transition"]]: !isTransitioning,
            })}
            style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
            onTransitionEnd={fixLoopAfterTransition}
          >
            {wrappedTestimonials.map((item, i) => (
              <div
                key={`testimonial+${item.id}+${i}`}
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
              onClick={handlePrev}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className={styles["testimonial-dots"]}>
              {testimonials.map((_, index) => (
                <span
                  key={`dot+${index}`}
                  className={cn(
                    styles.dot,
                    index === realIndex && styles.active
                  )}
                  onClick={() => {
                    goTo(index);
                  }}
                ></span>
              ))}
            </div>
            <button
              className={cn(styles["testimonial-arrow"], styles.next)}
              onClick={handleNext}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
