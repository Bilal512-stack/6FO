import React from 'react';

interface PricingSectionProps {
  productImg: string; // L'image avec le livre 6FO et les téléphones
}

const PricingSection: React.FC<PricingSectionProps> = ({ productImg }) => {
  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg"
  ];

  return (
    <section className="pricing-layout reveal">
      <div className="pricing-header reveal">
        <p className="pricing-subtitle reveal">OBTIENS L'ACCÈS À 6 Figure OFM</p>
        <h2 className="pricing-main-title reveal">Le Seul Programme Dont Tu Auras Besoin</h2>
      </div>

      <div className="pricing-card">
        <h3 className="card-access-title reveal">ACCÈS À VIE À 6 FIGURE OFM</h3>
        
        <div className="pricing-image-container">
          <img src={productImg} alt="Pack 6 Figure OFM" className="pricing-img" />
        </div>

        <div className="price-tag">
          <span className="old-price">€1,297</span>
          <span className="current-price">€697</span>
        </div>

        <button className="pricing-cta-btn">
          Passer À L'action
        </button>

        <div className="pricing-proof">
          <div className="pricing-avatars">
            {avatars.map((url, i) => (
              <img key={i} src={url} alt="membre" className="p-avatar" />
            ))}
          </div>
          <p className="p-stats">Rejoins <strong>1,100+</strong> Membres Aujourd'hui</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;