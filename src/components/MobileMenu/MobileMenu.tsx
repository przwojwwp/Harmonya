import styles from "./MobileMenu.module.scss";
import cn from "classnames";

export const MobileMenu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <a href="#" className={styles.logo}>
          <img
            src="public/img/logo.jpeg"
            alt="Harmonya Logo - Strona główna"
            className={styles["logo-image"]}
          />
        </a>
        <i className={cn("fas fa-xmark", styles.close)}></i>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#benefits">Korzyści</a>
        </li>
        <li>
          <a href="#testimonials">Opinie</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#service-packages">Oferta</a>
        </li>
      </ul>
      <a
        href="#contact"
        aria-label="Kontakt"
        className={cn("btn", styles.contact)}
      >
        Kontakt
      </a>
    </nav>
  );
};
