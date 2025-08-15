import cn from "classnames";
import styles from "./Benefits.module.scss";
import { benefits } from "./benefitsData";

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
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.id}+${index}`}
              className={styles["benefit-item"]}
              data-aos="fade-up"
              data-aos-delay={100 + (index % 3) * 100}
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
