import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <a href="#" className={styles.logo}>
            <img
              src="public/img/logo.jpeg"
              alt="Harmonya Logo"
              className={styles.logoImage}
            />
          </a>
          <ul className={styles.navLinks}>
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
          <div className={styles.mobileToggle}>
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
