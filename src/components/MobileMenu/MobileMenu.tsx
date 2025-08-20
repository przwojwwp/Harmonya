import { useBreakPoint } from "@/hooks/useBreakPoint";
import styles from "./MobileMenu.module.scss";

export const MobileMenu = () => {
  const breakpoint = useBreakPoint();

  return (
    <>
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
          <a href="#contact" className="btn">
            Kontakt
          </a>
        </>
      )}
    </>
  );
};
