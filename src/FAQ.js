import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Will all papers be published in International Journal?",
      answer:
        "Yes, all registered papers will be published in international journals like Scopus indexed, ANNA University Annexure 1, SCIE Journal, Web of Science. Authors can choose the journal of their wish, with an additional fee charged."
    },
    {
      question: "In case we cannot make our presence (absent) in the conference?",
      answer:
        "You can present the paper in online mode or submit a video presentation as per the conference guidelines."
    },
    {
      question: "Who are eligible for Video Presentation?",
      answer:
        "Authors who cannot attend in person due to travel restrictions, international distance or emergencies can opt for video presentation."
    },
    {
      question: "Who is a Registered Author?",
      answer:
        "A registered author is someone who has paid the conference registration fee and submitted the required documents."
    },
    {
      question: "What will be the presentation timing?",
      answer:
        "Each presenter will receive 8–10 minutes for presentation followed by Q&A."
    },
    {
      question: "What should the participants bring?",
      answer:
        "Participants should bring their ID card, presentation slides (PPT), and a printed copy of their paper."
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ</h1>

      <div className="faq-box">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
