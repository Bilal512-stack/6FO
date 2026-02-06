import React from 'react';

const Warranty: React.FC = () => {
  return (
    <section className="warranty-section">
      <div className="app-container">
        
        {/* Header de la garantie */}
        <div className="warranty-header">
          <h2>Ma <span className="blue-text">Garantie</span></h2>
          <p>Si tu ne rembourses pas ton investissement dans les 4 mois, tu seras entièrement remboursé.</p>
          <p>Je propose cette garantie car je sais que ce que j'apprends fonctionne.</p>
          <p>Passe à l'action et obtiens des résultats, ou reste spectateur.</p>
        </div>

        {/* Corps avec l'image et le texte */}
        <div className="story-layout">
          <div className="story-image-side">
            <img 
              src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/691fc6c9843903438fdc61fa_IMG_6845%203.jpeg" // Remplace par ton lien local ou distant
              alt="Lifestyle Success" 
              className="story-img" 
            />
          </div>

          <div className="story-content-side">
            <h3>Une année suffit</h3>
            <h4>Ça n'a pas à prendre 10 ans.</h4>
            
            <div className="story-text">
              <p>
                Tu peux passer de ta situation actuelle à atteindre tes objectifs 
                en une année de concentration...
              </p>
              <p>
                <strong>Mais seulement</strong> si tu te concentres sur le bon 
                business model, en utilisant les bonnes informations.
              </p>
              <p>C'est ce que j'ai fait.</p>
              <p>
                Des centaines de personnes réussissent avec moi. Le doute que tu as 
                n'est rien de plus qu'un manque de confiance en toi, car ce que 
                j'apprends fonctionne, visiblement.
              </p>
              <p>Pourquoi pas toi ?</p>
            </div>

            <button className="primary-btn" style={{ marginTop: '20px' }}>
              Passer À L'action
            </button>
          </div>
        </div>

        {/* Section finale impactante */}
        <div className="footer-cta-section">
          <h2>OU NE FAIT RIEN</h2>
          <p>Continue de nous regarder gagner. Trouve un CDI.</p>
        </div>

      </div>
    </section>
  );
};

export default Warranty;