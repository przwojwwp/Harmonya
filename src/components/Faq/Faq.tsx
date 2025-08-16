import { faq } from "./faqData";
import styles from "./Faq.module.scss";

export const Faq = () => {
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Najczęściej zadawane pytania</h2>
          <p>
            Znajdź odpowiedzi na najczęstsze pytania dotyczące naszej współpracy
          </p>
        </div>

        <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
          {faq.map((question, index) => (
            <div
              key={`${question.id}+${index}`}
              className="faq-item"
              data-aos="fade-up"
            >
              <div className="faq-question">
                <h3 className={styles.question}>
                  <i className="fas fa-comment-dots"></i>
                  <br />
                  {question.question}
                </h3>
              </div>
              <div className="faq-answer">
                <p className={styles.answer}>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
