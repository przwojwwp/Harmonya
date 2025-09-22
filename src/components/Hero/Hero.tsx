import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const [compact, setCompact] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const isMobile = () => window.innerWidth <= 825;
    let lastMobile = isMobile();

    const io = new IntersectionObserver(
      (entries) => {
        const r = entries[0]?.intersectionRatio ?? 1;
        if (!isMobile()) {
          if (compact) setCompact(false);
          return;
        }
        setCompact(r < 0.6);
      },
      { root: null, threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    io.observe(imgRef.current);

    const onResize = () => {
      const nowMobile = isMobile();
      if (lastMobile !== nowMobile) {
        lastMobile = nowMobile;
        if (!nowMobile && compact) setCompact(false);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [compact]);

  return (
    <section
      id="home"
      className={cn(styles.hero, "section", compact && styles.compact)}
    >
      <div className="container">
        <div className={styles["hero-wrapper"]}>
          <div
            className={styles["hero-content"]}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
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
              <a href="#benefits" className="btn btn-outline">
                Poznaj korzyści
              </a>
            </div>
          </div>

          <div className={styles["hero-image"]}>
            <img ref={imgRef} src="img/me2.jpeg" alt="Harmonya" />
          </div>
        </div>
      </div>

      <div className={styles["hero-decoration"]} />
      <div className={styles["hero-decoration"]} />
      <div className={styles["hero-decoration"]} />
    </section>
  );
};
