import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section section-spacing">
      <div className="container faq-shell">
        <div className="section-header text-center">
          <p className="eyebrow text-primary">FREQUENTLY ASKED QUESTIONS</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {hospitalData.faqs.map((item, index) => (
            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={item.question}>
              <button type="button" className="faq-question" onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                <ChevronDown size={18} />
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
