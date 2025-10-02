import { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { MobileMenu } from "../MobileMenu";
import cn from "classnames";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const breakpoint = useBreakPoint();
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header id="header" ref={headerRef} className={styles.header}>
      <div className="container">
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <nav className={styles.navbar}>
          <a href="#" className={styles.logo}>
            <img
              src="img/logo.jpeg"
              alt="Harmonya Logo"
              className={styles["logo-image"]}
            />
          </a>
          {breakpoint === "mobile" && (
            <div className={styles["mobile-toggle"]}>
              <i
                onClick={() => setIsMenuOpen(true)}
                className="fas fa-bars"
              ></i>
            </div>
          )}
          {(breakpoint === "tablet" || breakpoint === "desktop") && (
            <>
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
                  <a href="#service-packages">Oferta</a>
                </li>
              </ul>
              <a href="#contact" className={cn("btn", styles.contact)}>
                Kontakt
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
