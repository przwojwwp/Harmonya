import cn from "classnames";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={cn("container", styles["footer-container"])}
        style={{ padding: 0 }}
      >
        <div className={styles["footer-content"]}>
          <div className={styles["footer-logo"]}>
            <a href="#" className={styles.logo}>
              <img
                src="img/logo.jpeg"
                alt="Harmonya Logo"
                className={styles["logo-image"]}
              />
            </a>
            <p>
              Tworzymy w zgodzie z Tobą. Profesjonalny marketing dla branży
              wellness.
            </p>
          </div>

          <div className={styles["footer-links"]}>
            {/* <h3>Informacje</h3> */}
            <ul>
              <li>
                <a href="#">Polityka prywatności</a>
              </li>
              <li>
                <a href="#">Regulamin</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          <div className={styles["social-links"]}>
            <a href="#" aria-label="Facebook">
              <i className={cn(styles["social-icon"], "fab fa-facebook-f")}></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className={cn(styles["social-icon"], "fab fa-instagram")}></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i
                className={cn(styles["social-icon"], "fab fa-linkedin-in")}
              ></i>
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; 2025 Harmonya Agency. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
