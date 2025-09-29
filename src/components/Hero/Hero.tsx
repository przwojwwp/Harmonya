import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!imgRef.current) return;

    const checkVisibility = () => {
      const el = imgRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const fullyVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight + 10 &&
        rect.right <= window.innerWidth + 10;

      setIsVisible(fullyVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.9) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      { threshold: [0, 1] }
    );

    // observer.observe(imgRef.current);

    window.addEventListener("resize", checkVisibility);
    checkVisibility();

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      observer.disconnect();
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <section id="home" className={cn(styles.hero, "section")}>
      <div className="container">
        <div className={styles["hero-wrapper"]}>
          <div className={cn(styles["hero-content"], !isVisible ? "" : "")}>
            <div className={styles["hero-tagline"]}>Harmonya agency</div>
            <h1>
              Tworzymy <span className="gold-text">w zgodzie</span> z Tobą
            </h1>
            <p className={styles["hero-description"]}>
              Profesjonalne wsparcie marketingowe dla branży wellness...
            </p>
            <div className={styles["hero-cta"]}>
              <a href="#pricing" className="btn">
                Sprawdź ofertę
              </a>
              <a href="#benefits" className={cn("btn", "btn-outline")}>
                Poznaj korzyści
              </a>
            </div>
          </div>

          <div
            ref={imgRef}
            className={styles["hero-image"]}
            style={{ display: isVisible ? "block" : "none" }}
          >
            <img src="img/me2.jpeg" alt="Harmonya" />
          </div>
        </div>
      </div>

      <div className={styles["hero-decoration"]} />
      <div className={styles["hero-decoration"]} />
      <div className={styles["hero-decoration"]} />
    </section>
  );
};
