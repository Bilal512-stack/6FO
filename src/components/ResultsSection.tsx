import { RESULTS } from "../data/results"
import { useState } from "react";

type ResultsSectionProps = {
  showSeeMore?: boolean;
  onSelect: (index: number) => void;
};

export default function ResultsSection({
  showSeeMore = false,
  onSelect,
}: ResultsSectionProps) {
  // État pour savoir si on a cliqué sur "Voir plus"
  const [isExpanded, setIsExpanded] = useState(false);

  // On définit la limite : 8 images au début, ou TOUT si isExpanded est vrai
  const limit = 8;
  const visibleResults = isExpanded ? RESULTS : RESULTS.slice(0, limit);

  return (
    <div className="results-section reveal">
      <div className="results-grid reveal">
        {visibleResults.map((result, index) => (
          <div
            key={index}
            className="result-card reveal"
            onClick={() => onSelect(index)}
          >
            <div className="result-badge">
              <span className="amount">{result.amount}</span>
              <span className="duration">{result.duration}</span>
            </div>

            <img
              src={result.image.src}
              srcSet={result.image.srcSet}
              sizes={result.image.sizes}
              alt=""
              className="r-img-s"
            />
          </div>
        ))}
      </div>
{/* Le bouton ne s'affiche que si showSeeMore est vrai ET qu'on n'a pas encore tout développé */}
      {showSeeMore && !isExpanded && (
        <div className="see-more-container">
          <button 
            className="primary-btn see-more-btn" 
            onClick={() => setIsExpanded(true)}
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
}


