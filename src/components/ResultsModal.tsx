import { createPortal } from "react-dom";
import type { Result } from "../data/results";

type ResultsModalProps = {
  results: Result[];
  currentIndex: number;
  setCurrentIndex: (index: number | null) => void;
};

export default function ResultsModal({ results, currentIndex, setCurrentIndex }: ResultsModalProps) {
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % results.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + results.length) % results.length);
  };

  return createPortal(
    <div className="modal-full-overlay" onClick={() => setCurrentIndex(null)}>
      
      {/* BOUTON FERMER */}
      <button className="modal-close-btn" onClick={() => setCurrentIndex(null)}>
        ×
      </button>

      <div className="modal-full-wrapper" onClick={(e) => e.stopPropagation()}>
        
        {/* VUE PRINCIPALE (L'IMAGE GÉANTE) */}
        <div className="modal-view-content">
          <button className="modal-nav-arrow left" onClick={prev}>‹</button>
          
          <div className="modal-image-stage">
            <div className="modal-info-text">
              {results[currentIndex].amount} — {results[currentIndex].duration}
            </div>
            <img 
              src={results[currentIndex].image.src} 
              className="modal-big-img" 
              alt="Résultat" 
            />
          </div>

          <button className="modal-nav-arrow right" onClick={next}>›</button>
        </div>

        {/* BARRE DE MINIATURES (Pellicule) */}
        <div className="modal-bottom-bar">
          {results.map((res, i) => (
            <div 
              key={i} 
              className={`modal-thumb-item ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            >
              <img src={res.image.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}