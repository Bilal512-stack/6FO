import "./App.css";
import Hero from "./components/Hero";
import GoodChoice from "./components/Goodchoice";
import ReadyToStart from "./components/ReadyToStart";
import IncomeSection from "./components/IncomeSection";
import ResultsSection from "./components/ResultsSection";
import PricingSection from "./components/PricingSection";
import Warranty from "./components/Warranty";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";
import SlidesSwiper from "./components/SlideSwiper";
import { useEffect, useState } from "react";
import ResultsModal from "./components/ResultsModal";
import { RESULTS } from "./data/results";


export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionnel : observer.unobserve(entry.target); 
        // (Laisse-le si tu veux que l'anim ne se joue qu'une fois)
      }
    });
  }, { threshold: 0.1 });

  // On scanne tous les éléments avec la classe .reveal
  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <div className="app">
      {/* --- HERO --- */}
      <Hero />

      {/* --- FOUNDATIONS --- */}
          <section className="foundations-section" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="floating-image-right">
    <img src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6578541ba5568b2b9bded312_ww.png" alt="" />
  </div>

  <div className="floating-image-left">
    <img src="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6578541a59d133cb56c1b1be_w.png" alt="" />
  </div>
  <div className="app-container" style={{ position: 'relative', zIndex: 2 }}>
    <header className="foundations-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <span className="foundations-eyebrow">VOICI EXACTEMENT CE QUE TU AURAS</span>
      <h2 className="foundations-title">À l'intérieur de 6 Figure OFM</h2>
    </header>

    {/* Conteneur relatif pour positionner les flèches par rapport au slider */}
    <div className="foundations-slider-wrapper" style={{ position: 'relative' }}>

      {/* Flèche Gauche Indépendante */}
      <div className="left-arrow-2 w-slider-arrow-left" role="button" aria-label="Previous slide">
        <div className="icon w-icon-slider-left"></div>
      </div>

      <div className="foundations-list">
        <SlidesSwiper />
      </div>

      {/* Flèche Droite Indépendante */}
      <div className="right-arrow-2 w-slider-arrow-right" role="button" aria-label="Next slide">
        <div className="icon w-icon-slider-right"></div>
      </div>

    </div>
  </div>
</section>

      {/* --- RÉSULTATS --- */}
      <section className="results-section">
        <div className="app-container">
          <span className="foundations-eyebrow">REJOINS LES NOMBREUX </span>
          <h2 className="results-title">RESULTATS MEMBRES</h2>
          <ResultsSection onSelect={setCurrentIndex} />
        </div>
      </section>

      {/* --- CONTENT BLOCKS --- */}
      <div className="app-container">
        <GoodChoice imageSrc="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/691f4755061a110945eef4a4_IMG_6716%204.jpeg" />
        <ResultsSection onSelect={setCurrentIndex} />
        <ReadyToStart />
        <ResultsSection onSelect={setCurrentIndex} />
        <IncomeSection dashboardImg="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6741a9f573aeefe8262985c8_IMG_1216.JPG" />
        <ResultsSection showSeeMore onSelect={setCurrentIndex} />
        {currentIndex !== null && (
  <ResultsModal
    results={RESULTS}
    currentIndex={currentIndex}
    setCurrentIndex={setCurrentIndex}
  />
)}



        <PricingSection productImg="https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/69261453f5fad849fa2187f4_Design%20sans%20titre%20(9).png" />
      </div>
      {/* --- GARANTIE --- */}
      <div className="app-container">
      <Warranty />
      </div>

      {/* --- BONUS --- */}
      <div className="app-container">
      <Bonus />
      </div>

      {/* --- FAQ FOOTER --- */}
      <div className="app-container">
      <FAQ />
      </div>
    </div>
  );
}
