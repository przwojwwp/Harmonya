import { faq } from "./faqData";

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
                <h3>{question.question}</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
