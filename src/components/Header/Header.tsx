import { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { MobileMenu } from "../MobileMenu";
import cn from "classnames";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const breakpoint = useBreakPoint();
  const headerRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!headerRef.current) return;
  //     if (window.scrollY > 50) {
  //       headerRef.current.classList.add(styles["header-scrolled"]);
  //     } else {
  //       headerRef.current.classList.remove(styles["header-scrolled"]);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
          {breakpoint === "desktop" && (
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

          {breakpoint === "mobile" && (
            <div className={styles["mobile-toggle"]}>
              <i
                onClick={() => setIsMenuOpen(true)}
                className="fas fa-bars"
              ></i>
            </div>
          )}
        </nav>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};
