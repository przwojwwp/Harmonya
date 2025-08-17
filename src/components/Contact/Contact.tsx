import cn from "classnames";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className={cn(styles.contact, "section")}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Gotowy na transformację swojego biznesu?</h2>
          <p>
            Skontaktuj się z nami i rozpocznij swoją podróż z profesjonalnym
            marketingiem dla branży wellness.
          </p>
        </div>

        <div className={styles.wrapper} data-aos="fade-up" data-aos-delay="100">
          <div className={styles["form-col"]}>
            <form id="contact-form" className={styles["contact-form"]}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              <input type="tel" id="phone" name="phone" placeholder="Phone" />

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your business"
                rows={5}
                required
              />

              <div
                className={cn(styles["form-group"], styles["form-checkbox"])}
              >
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  kontaktu.*
                </label>
              </div>

              <button type="submit" className={styles["submit-btn"]}>
                Wyślij zapytanie
              </button>
            </form>
          </div>

          <div className={styles["info-col"]}>
            <div className={styles["contact-item"]}>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:kontakt@harmonya.pl">kontakt@harmonya.pl</a>
              </p>
            </div>

            <div className={styles["contact-item"]}>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <h3>Telefon</h3>
              <p>
                <a href="tel:+48500600700">+48 500 600 700</a>
              </p>
            </div>

            <div className={styles["contact-item"]}>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <h3>Adres</h3>
              <p>
                ul. Harmonijna 42
                <br />
                00-001 Warszawa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decoration} aria-hidden="true" />
    </section>
  );
};
