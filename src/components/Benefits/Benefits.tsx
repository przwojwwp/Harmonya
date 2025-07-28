import cn from "classnames";
import styles from "./Benefits.module.scss";

export const Benefits = () => {
  return (
    <section id="benefits" className={cn(styles.benefits, "section")}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Dlaczego warto z nami współpracować?</h2>
          <p>
            Zapewniamy kompleksowe wsparcie, które pomoże rozwinąć Twoją markę w
            branży wellness
          </p>
        </div>
        <div className={styles["benefits-grid"]}>
          <div
            className={styles["benefit-item"]}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles["benefit-icon"]}>
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3 className={styles["benefit-title"]}>Zaopiekowany Marketing</h3>
            <p>
              Przejmujemy pełną odpowiedzialność za Twój marketing, abyś mógł
              skupić się na prowadzeniu swojego biznesu i pracy z klientami.
            </p>
          </div>
          <div
            className={styles["benefit-item"]}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles["benefit-icon"]}>
              <i className="fas fa-hashtag"></i>
            </div>
            <h3 className={styles["benefit-title"]}>
              Profesjonalne Social Media
            </h3>
            <p>
              Tworzymy angażujące treści i budujemy społeczność wokół Twojej
              marki, zwiększając rozpoznawalność i zaufanie do Twoich usług.
            </p>
          </div>
          <div
            className={styles["benefit-item"]}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles["benefit-icon"]}>
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className={styles["benefit-title"]}>Eksperckie Wsparcie</h3>
            <p>
              Nasz zespół specjalistów z doświadczeniem w branży wellness
              zapewnia strategiczne doradztwo i rozwiązania dopasowane do Twoich
              potrzeb.
            </p>
          </div>
          <div
            className={styles["benefit-item"]}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles["benefit-icon"]}>
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3 className={styles["benefit-title"]}>Holistyczne Podejście</h3>
            <p>
              Łączymy różne kanały komunikacji i marketingu, tworząc spójny
              przekaz, który rezonuje z wartościami Twojej marki i Twoich
              klientów.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits-decoration"></div>
    </section>
  );
};
