import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.scss";
import cn from "classnames";

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
  const [visibleIndex, setVisibleIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTransitionComplete, setIsTransitionComplete] = useState(true);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderDirectionRef = useRef<"next" | "previous">("next");

  useEffect(() => {
    startSlider(sliderDirectionRef.current);
    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalRef.current!);
      } else {
        startSlider(sliderDirectionRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const startSlider = (direction: "next" | "previous" = "next") => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (sliderDirectionRef.current === "previous") {
        handlePrev();
      } else {
        handleNext();
      }
    }, 1000);
  };

  const slideToIndex = (
    index: number,
    direction: "next" | "previous" = "next",
    absolute: boolean = false
  ) => {
    if (!isTransitionComplete) return;

    sliderDirectionRef.current = direction;
    setIsTransitionComplete(false);
    setIsTransitioning(true);

    absolute ? setVisibleIndex(index) : setVisibleIndex((prev) => prev + index);
    startSlider(direction);

    setTimeout(() => {
      setIsTransitionComplete(true);
    }, 700);
  };

  const handleNext = () => slideToIndex(1, "next");
  const handlePrev = () => slideToIndex(-1, "previous");

  const goTo = (index: number) => {
    const direction = index + 1 > visibleIndex ? "next" : "previous";
    slideToIndex(index + 1, direction, true);
  };

  const realIndex = (() => {
    if (visibleIndex === 0) return testimonials.length - 1;
    if (visibleIndex >= wrappedTestimonials.length - 1) return 0;
    return visibleIndex - 1;
  })();

  return (
    <section
      id="testimonials"
      className={cn(styles.testimonials, styles.section)}
    >
      <div className="container">
        <div className="section-title">
          <h2>Co mówią nasi klienci</h2>
          <p>
            Zobacz, jak współpraca z nami wpłynęła na rozwój biznesów naszych
            klientów
          </p>
        </div>

        <div className={styles["testimonials-slider"]}>
          <div
            className={cn(styles["testimonials-track"], {
              [styles["no-transition"]]: !isTransitioning,
            })}
            style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
            onTransitionEnd={() => {
              if (visibleIndex === 0) {
                setIsTransitioning(false);
                setVisibleIndex(wrappedTestimonials.length - 2);
              } else if (visibleIndex === wrappedTestimonials.length - 1) {
                setIsTransitioning(false);
                setVisibleIndex(1);
              }
            }}
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
