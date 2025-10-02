import cn from "classnames";
import styles from "./Benefits.module.scss";
import { benefits } from "./benefitsData";
import { useEffect, useState } from "react";

export const Benefits = () => {
  const [colInRow, setColInRow] = useState(3);
  const tablet = 1024;
  const desktop = 1200;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < tablet) return setColInRow(2);
      if (window.innerWidth < desktop) return setColInRow(3);
      return setColInRow(4);
    };

    handleResize();

    document.addEventListener("visibilitychange", handleResize);

    return () => document.removeEventListener("visibilitychange", handleResize);
  }, []);

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
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.id}+${index}`}
              className={styles["benefit-card"]}
              data-aos="fade-up"
              data-aos-delay={100 + (index % colInRow) * 100}
            >
              <div className={styles["benefit-icon"]}>
                <i className={benefit.icon}></i>
              </div>
              <h3 className={styles["benefit-title"]}>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
