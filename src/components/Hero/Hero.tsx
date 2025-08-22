import styles from "./Hero.module.scss";
import cn from "classnames";

export const Hero = () => {
  return (
    <section id="home" className={cn(styles.hero, "section")}>
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
              Profesjonalne wsparcie marketingowe dla branży wellness. Rozwijaj
              swój biznes z zespołem, który rozumie Twoją wizję i potrzeby.
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
            <img src="img/me2.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles["hero-decoration"]}></div>
      <div className={styles["hero-decoration"]}></div>
      <div className={styles["hero-decoration"]}></div>
    </section>
  );
};
