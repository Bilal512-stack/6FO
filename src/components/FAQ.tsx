import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "C'est vraiment tout nouveau pour moi, je n'ai aucune expérience dans le business. Est-ce adapté pour moi ?",
      answer: "Si tu sais lire et appliquer des instructions, tu réussiras. Les informations données dans mon programme sont les bonnes et fonctionnent AUJOURD'HUI."
    },
    {
      question: "Ai-je besoin d'avoir des connaissances préalables ou d'être fort en informatique pour me lancer ?",
      answer: "Pas du tout. La formation est conçue de façon à ce qu'un débutant sans la moindre connaissance dans le domaine puisse lancer son business et réussir."
    },
    {
      question: "Combien de temps et d'argent faut-il pour commencer ?",
      answer: "Plusieurs de mes membres ont lancé leur agence en parallèle de leur emploi à temps plein et leurs études, sans dépenses supplémentaires. Et pourtant ils ont réussi à atteindre plus de €5,000 / mois. Tout ce dont tu as besoin, c'est de la détermination."
    },
    {
      question: "Peut-on suivre la formation à notre rythme et en parallèle de notre travail/études ?",
      answer: "Oui. Sachant que tu auras accès à la formation à vie, il est possible de décider de la regarder à ton rythme, d'où tu le souhaites."
    }
  ];

  return (
    <section className="faq-section reveal">
      <div className="app-container">
        <div className="faq-header reveal">
          <span className="faq-eyebrow reveal">FAQ</span>
          <h2 className="reveal">Questions Fréquemment Posées</h2>
        </div>

        <div className="faq-list reveal">
  {faqData.map((item, index) => (
    <div 
      key={index} 
      className={`faq-item ${openIndex === index ? 'open' : ''}`}
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <div className="faq-question">
        <h3>{item.question}</h3>
        {/* On remplace l'icône texte par ton image SVG */}
        <div className="faq-icon-wrapper">
          <img 
            src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/65783e2474a9e694ee38abae_0101%20%20655f77ae7075918901ff2c89_chevron-right-icon-elements-brix-templates%20(1).svg" 
            alt="chevron"
            className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
          />
        </div>
      </div>
      
      {/* L'animation de l'ouverture est gérée par le CSS sur faq-answer */}
      {openIndex === index && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

        {/* --- SECTION PRÊT À COMMENCER --- */}
        <div className="ready-to-start">
          <h2>Prêt À Commencer ?</h2>
          <button className="primary-btn">Obtenir L'accès Instantané</button>
        </div>

        {/* --- FOOTER --- */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/692612a5c475982220040998_Design%20sans%20titre%20(8).png"
              alt="" />
            </div>
            <div className="footer-copyright">
              Copyright ©2026 6FO | Tous Droits Réservés
            </div>
            <div className="footer-links">
              <a href="#">Termes</a>
              <a href="#">Confidentialité</a>
              <a href="#">GCV</a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default FAQ;