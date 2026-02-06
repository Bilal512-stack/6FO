import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="app-container">
        {/* Branding / Logo */}
        <div>
          <a href="/">
            <img
              src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/692612a5c475982220040998_Design%20sans%20titre%20(8).png"
              loading="lazy"
              alt="Logo"
              className="brand-logo"
            />
          </a>
        </div>

        {/* Titre Principal */}
        <h1 className="hero-title">
          Comment Créer Une Source De<br />
          Revenue<span className="highlight-text">Exponentielle</span>En OFM
        </h1>

        {/* Video VSL */}
        <div className="video-container">
          <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <div className="wistia_responsive_wrapper" style={{ position: "absolute", inset: 0 }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/umtkvhbkaj?videoFoam=true"
                title="6 Figure OFM"
                allowTransparency
                allowFullScreen
                className="wistia_embed"
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats - Séparées pour garder l'indépendance du fond */}
      <div className="stats-section">
        <div className="app-container">
          <div className="stats-wrapper">
            <div className="stat">
              <div className="stat-value">+50</div>
              <div className="stat-label">Heures de contenus</div>
            </div>
            
            <div className="stat-separator" />
            
            <div className="stat">
              <div className="stat-value">+9M€</div>
              <div className="stat-label">Générés par nos membres</div>
            </div>
            
            <div className="stat-separator" />
            
            <div className="stat">
              <div className="stat-value">+600</div>
              <div className="stat-label">Managers formés</div>
            </div>
          </div>
          
          <button className="primary-btn stats-cta">
            Rejoins-Nous Aujourd’hui
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;