import React from 'react';

interface GoodChoiceProps {
  imageSrc: string;
}

const GoodChoice: React.FC<GoodChoiceProps> = ({ imageSrc }) => {
  return (
    <section className="goodchoice-layout reveal">
      
      {/* Côté Image */}
      <div className="goodchoice-image-side reveal">
        <img 
          src={imageSrc} 
          alt="Ton Portrait" 
          className="goodchoice-raw-img reveal"
        />
      </div>

      {/* Côté Texte */}
      <div className="goodchoice-content-side reveal">
        <h2 className="goodchoice-title reveal">Le Bon Choix</h2>
        
        <div className="goodchoice-description reveal">
          <p>
            Si tu veux apprendre une compétence ou un business, 
            apprends de quelqu'un qui l'a fait.
          </p>
          <br />
          <p>
            J'ai documenté publiquement mon évolution de 20k / mois, 
            jusqu'à <span>+1,1M / mois (brut)</span>, en 1 an et demi.
          </p>
        </div>

        <button className="goodchoice-action-button reveal">
          Passer À L'action
        </button>
      </div>

    </section>
  );
};

export default GoodChoice;