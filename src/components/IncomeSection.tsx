import React from 'react';

interface IncomeSectionProps {
  dashboardImg: string; // L'image du rapport de revenus
}

const IncomeSection: React.FC<IncomeSectionProps> = ({ dashboardImg }) => {
  return (
    <section className="income-layout reveal">
      
      {/* Côté Image (Le screenshot du dashboard) */}
      <div className="income-image-side">
        <img 
          src={dashboardImg} 
          alt="Rapport de revenus" 
          className="income-dashboard-img"
        />
      </div>

      {/* Côté Texte */}
      <div className="income-content-side reveal">
        <h2 className="income-title reveal">
          Développer une agence OFM n'est pas difficile, si tu sais comment t'y prendre.
        </h2>
        
        <div className="income-description reveal">
          <p>
            Arrête de prendre des conseils de personnes qui ne savent pas 
            de quoi ils parlent et ne sont pas là où tu veux aller.
          </p>
          <p>
            Commence par apprendre de ceux qui vivent la vie que tu veux 
            vivre et ont déjà réalisé ce que tu cherches à accomplir.
          </p>
          <p>
            Le monde tourne autour des choix que l'on fait. La liberté que 
            j'ai aujourd'hui est le fruit des choix et des sacrifices en temps 
            et argent que j'ai faits dans le passé.
          </p>
        </div>

        <button className="income-cta-btn reveal">
          Passer À L'action
        </button>
      </div>

    </section>
  );
};

export default IncomeSection;