import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import cn from "classnames";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <nav className={cn(styles.navbar, isMenuOpen ? styles.open : "")}>
      <div className={styles.header}>
        <a href="#" className={styles.logo}>
          <img
            src="public/img/logo.jpeg"
            alt="Harmonya Logo - Strona główna"
            className={styles["logo-image"]}
          />
        </a>
        <button onClick={() => setIsMenuOpen(false)}>
          <i className={cn("fas fa-xmark", styles.close)}></i>
        </button>
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
