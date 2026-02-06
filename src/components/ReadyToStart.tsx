import React from 'react';

const ReadyToStart: React.FC = () => {
  // Liste fictive de tes membres pour les avatars
  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg"
  ];

  return (
    <section className="ready-section reveal">
      <div className="ready-container">
        <h2 className="ready-title reveal">Prêt À Commencer ?</h2>
        
        <button className="ready-cta-btn reveal">
          Passer À L'action
        </button>

        <div className="ready-social-proof">
          <div className="ready-avatar-group">
            {avatars.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Membre ${index}`} 
                className="ready-avatar" 
              />
            ))}
          </div>
          <p className="ready-stats">
            Rejoins <strong>1,100+ Membres</strong> Aujourd'hui
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;