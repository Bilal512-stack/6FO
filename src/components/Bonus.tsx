import React from 'react';

const Bonus: React.FC = () => {
  return (
    <section className="bonus-section reveal">
      <div className="app-container">
        
        {/* Header Bonus */}
        <div className="bonus-header reveal">
          <span className="bonus-eyebrow reveal">BONUS</span>
          <h2>Au cas où je ne t'ai pas encore convaincu à 100%, voici 2 bonus pour rendre cette offre encore plus sympa, si tu rejoins aujourd'hui.</h2>
        </div>

        {/* Liste des Bonus */}
        <div className="bonus-list reveal">
          
          {/* Bonus #1 */}
          <div className="bonus-card reveal">
            <span className="bonus-number">BONUS #1</span>
            <h3>10,000 abonnés sur le compte Instagram de ton choix</h3>
            <p>Obtiens 10,000 abonnés sur le compte Instagram de ton choix dès ton entrée.</p>
          </div>

          {/* Bonus #2 */}
          <div className="bonus-card reveal">
            <span className="bonus-number">BONUS #2</span>
            <h3>La Méthode Qui Permet Aux Membres De Signer Des Créateurs en 12/24H...</h3>
            <p>
              Tu te doutes qu'un compte agence qui date d'une semaine ne donne pas confiance. 
              Apprends la méthode exacte que les membres du programme utilisent pour signer 
              leurs premier contrat en moins d'un jour.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Bonus;