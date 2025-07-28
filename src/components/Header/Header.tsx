import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        headerRef.current.classList.add(styles["header-scrolled"]);
      } else {
        headerRef.current.classList.remove(styles["header-scrolled"]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" ref={headerRef} className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <a href="#" className={styles.logo}>
            <img
              src="public/img/logo.jpeg"
              alt="Harmonya Logo"
              className={styles["logo-image"]}
            />
          </a>
          <ul className={styles["nav-links"]}>
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
              <a href="#pricing">Oferta</a>
            </li>
          </ul>
          <div className={styles["mobile-toggle"]}>
            <i className="fas fa-bars"></i>
          </div>
          <a href="#contact" className="btn">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};
