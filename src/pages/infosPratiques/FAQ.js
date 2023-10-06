import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const faqData = [
  {
    theme: "Thème 1",
    questions: [
      {
        question: "Question 1.1",
        answer: "Réponse 1.1",
      },
      {
        question: "Question 1.2",
        answer: "Réponse 1.2",
      },
    ],
  },
  {
    theme: "Thème 2",
    questions: [
      {
        question: "Question 2.1",
        answer: "Réponse 2.1",
      },
    ],
  },
];

const FAQ = () => {
  const [activeTheme, setActiveTheme] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div>
      <NavBarGlobal />
      <h1>FAQ</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>Foire aux questions</h2>
        {faqData.map((theme, themeIndex) => (
          <div key={themeIndex} className="faq-container">
            <h3
              className={activeTheme === themeIndex ? "active" : ""}
              onClick={() => {
                if (themeIndex !== activeTheme) {
                  setActiveTheme(themeIndex);
                  setActiveQuestion(null); // Réinitialisez l'état de la question active
                } else {
                  setActiveTheme(null);
                }
              }}
            >
              {theme.theme}
            </h3>
            {activeTheme === themeIndex &&
              theme.questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <h4
                    className={activeQuestion === questionIndex ? "active" : ""}
                    onClick={() => {
                      if (activeQuestion === questionIndex) {
                        setActiveQuestion(null); // Ferme la question si elle est déjà ouverte
                      } else {
                        setActiveQuestion(questionIndex); // Sinon, ouvre la question
                      }
                    }}
                  >
                    {question.question}
                  </h4>
                  {activeQuestion === questionIndex && <p>{question.answer}</p>}
                </div>
              ))}
          </div>
        ))}
      </AnimatedContainer>
    </div>
  );
};

export default FAQ;
