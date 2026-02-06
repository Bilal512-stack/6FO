import React from "react";

type SlideProps = {
  phase: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
};

const Slide: React.FC<SlideProps> = ({
  phase,
  title,
  description,
  points,
  image,
  reverse = false,
}) => {
  return (
    /* On garde foundations-slide-inner pour le lien avec Swiper */
    <div className="foundations-slide-inner">
      {/* La classe slide-reverse sera activée via ta logique Swiper ou Props */}
      <div className={`slide-content ${reverse ? "slide-reverse" : ""}`}>

        {/* BLOC TEXTE - Utilise tes classes pour le style Webflow */}
        <div className="slide-text-side">
          <span className="phase-label">{phase}</span>
          <h2 className="phase-title">{title}</h2>
          <p className="phase-description">{description}</p>

          <div className="phase-list">
            {points.map((point, index) => (
              <div key={index} className="slide-item">
                <img
                  src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6577f0bc6064accb7aeca26f_655f77ae7075918901ff2c84_Checkmark.png"
                  loading="lazy"
                  alt="check"
                  className="check-icon"
                />
                <span className="point-text">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BLOC VISUEL - C'est ici que tes flèches vont "encadrer" l'image */}
        <div className="foundations-visual">
          <img src={image} alt={title} className="main-slide-image" />
        </div>

      </div>
    </div>
  );
};

export default Slide;