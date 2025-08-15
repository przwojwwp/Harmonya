import { servicePackages } from "./servicePackagesData";
import styles from "./ServicePackages.module.scss";
import cn from "classnames";

export const ServicePackages = () => {
  return (
    <section id="service-packages" className="service-packages section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Wybierz pakiet dla swojego biznesu</h2>
          <p>
            Oferujemy elastyczne rozwiązania dopasowane do potrzeb Twojej marki
            wellness
          </p>
        </div>

        <div className={styles.grid}>
          {servicePackages.map((servicePackage, index) => (
            <div
              key={`${servicePackage.id}+${index}`}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.header}>
                <div className={styles.icon}>
                  <i className={servicePackage.icon}></i>
                </div>
                <h3 className={styles.title}>{servicePackage.title}</h3>
                <p className={styles.description}>
                  {servicePackage.description}
                </p>
              </div>
              <div className={styles.services}>
                <ul>
                  {servicePackage.services.map((service) => (
                    <li className={styles.included}>
                      <i className={cn(styles.check, "fas fa-check")}></i>{" "}
                      {service}
                    </li>
                  ))}
                  {servicePackage.excludedServices.map((excludeService) => (
                    <li className={styles.excluded}>
                      <i className={cn(styles.cross, "fas fa-times")}></i>{" "}
                      {excludeService}
                    </li>
                  ))}
                  {servicePackage.additionalCost?.map((additionalcost) => (
                    <li className={styles.additional}>
                      <i className={"fas"}>*</i> {additionalcost}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a href="#contact" className={cn(styles.cta, "btn")}>
                  Wybieram
                </a>
              </div>
              <div className="service-packages-price">
                <div className="price-info">
                  <div className={styles["price-before"]}>
                    {servicePackage.price + 500} PLN / {servicePackage.period}
                  </div>
                  {servicePackage.price} PLN / {servicePackage.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="service-packages-info"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            Wszystkie pakiety zawierają 3-miesięczny minimalny okres współpracy.
            Możliwość dostosowania pakietów do indywidualnych potrzeb.
          </p>
          <p>
            Nie znalazłeś odpowiedniego pakietu?{" "}
            <a href="#contact">Skontaktuj się z nami</a>, przygotujemy
            indywidualną ofertę.
          </p>
        </div>
      </div>
    </section>
  );
};
