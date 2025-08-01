export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="logo">
              <img
                src="ścieżka-do-twojego-logo.png"
                alt="Harmonya Logo"
                className="logo-image"
              />
            </a>
            <p>
              Tworzymy w zgodzie z Tobą. Profesjonalny marketing dla branży
              wellness.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Nawigacja</h3>
            <ul>
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
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Usługi</h3>
            <ul>
              <li>
                <a href="#pricing">Social Media</a>
              </li>
              <li>
                <a href="#pricing">Strategia Widoczności</a>
              </li>
              <li>
                <a href="#pricing">Kampanie Reklamowe</a>
              </li>
              <li>
                <a href="#contact">Sesje zdjęciowe</a>
              </li>
              <li>
                <a href="#contact">Audyt marketingowy</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Informacje</h3>
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
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Harmonya Agency. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
