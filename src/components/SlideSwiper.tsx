import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Slide from "./Slide"

// Données de toutes les slides
const slidesData = [
    {
    phase: "Phase 1",
    title: "Fondations",
    description: "Mets en place ton agence et ta présence en ligne.",
    points: [
      "Configurations de design et de réseaux sociaux les plus efficaces",
      "Logiciels que tu dois utiliser",
      "Crée ta crédibilité et ton image de marque rapidement"
    ],
    image: "https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/696023ad404fc47b55b734e9_banner%20whoop%20(1).png",
    srcSet: `
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/696023ad404fc47b55b734e9_banner%20whoop%20(1)-p-500.png 500w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/696023ad404fc47b55b734e9_banner%20whoop%20(1)-p-800.png 800w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/696023ad404fc47b55b734e9_banner%20whoop%20(1)-p-1080.png 1080w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/696023ad404fc47b55b734e9_banner%20whoop%20(1)-p-1600.png 1600w
    `,
    sizes: "(max-width: 479px) 100vw, 240px"
  },
  {
  phase: "Phase 2",
  title: "Prospection, Recrutement & Onboarding",
  description:
    "Maintenant que tout est mis en place et que tu as une présence en ligne crédible, il te faut des clients.",
  points: [
    "Recrute tes clients, gère les objections et fais-les rester sur le long terme",
    "Scripts et méthodes de DM qui assurent des réponses positives de créateurs potentiels",
    "Structurer un appel et le closer avec certitude",
    "Onboarding : une fois qu’elle signe, que faire concrètement"
  ],
  image:
    "https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/694ec7d98852c8cc917e3232_E%CC%81tapes%20de%CC%81taille%CC%81%20du%20premier%20message%20jusqu%E2%80%99a%CC%80%20la%20mise%20en%20place%20du%20compte%20(1)-p-500.png",
  srcSet: `
    https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/phase2_prospection_onboarding-p-500.png 500w,
    https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/phase2_prospection_onboarding-p-800.png 800w,
    https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/phase2_prospection_onboarding-p-1080.png 1080w,
    https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/phase2_prospection_onboarding.png 1563w
  `,
  sizes: "(max-width: 479px) 100vw, 240px"
},
  {
    phase: "Phase 3",
    title: "Marketing & Chatting",
    description: "Générer du trafic et encaisser de l'argent.",
    points: ["Process exact pour générer du trafic", "Optimisation du taux de conversion", "Psychologie du chatting OFM"],
    image: "https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/67407e0c26dac13b155e8876_3.png",
     srcSet: `
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/67407e0c26dac13b155e8876_3-p-500.png 500w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/67407e0c26dac13b155e8876_3-p-800.png 800w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/67407e0c26dac13b155e8876_3-p-1080.png 1080w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/67407e0c26dac13b155e8876_3.png 1563w
    `,
    sizes: "(max-width: 479px) 100vw, 240px"
  },
  {
    phase: "Phase 4",
    title: "Déleguer & Automatisation",
    description: "Les étapes à suivre pour te libérer du temps, partir en vacances et revenir plus riche qu'au départ.",
    points: ["Où et comment trouver les personnes à qui tu vas déléguer ton travail", "Comment les intégrer et établir le flux de travail efficace de manière à garantir le succès", "Gestion des paiements - Comment se faire payer en premier"],
    image: "https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6740ff49598c4d4b43fa1dc4_Sans%20titre%20(1024%20x%20576%20px)%20(1080%20x%201080%20px)%20(3).png",
    srcSet: `
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6740ff49598c4d4b43fa1dc4_Sans%20titre%20(1024%20x%20576%20px)%20(1080%20x%201080%20px)%20(3)-p-500.png 500w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6740ff49598c4d4b43fa1dc4_Sans%20titre%20(1024%20x%20576%20px)%20(1080%20x%201080%20px)%20(3)-p-800.png 800w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6740ff49598c4d4b43fa1dc4_Sans%20titre%20(1024%20x%20576%20px)%20(1080%20x%201080%20px)%20(3)-p-1080.png 1080w,
      https://cdn.prod.website-files.com/6576eb7cbc0c28ebed8f7a32/6740ff49598c4d4b43fa1dc4_Sans%20titre%20(1024%20x%20576%20px)%20(1080%20x%201080%20px)%20(3).png 1563w
    `,
    sizes: "(max-width: 479px) 100vw, 240px"
  }
];
export default function SlidesSwiper() {
  return (
    <div className="slides-container">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        // CONFIGURATION CRUCIALE : On lie les classes de tes div indépendantes
        navigation={{
          prevEl: ".left-arrow-2",
          nextEl: ".right-arrow-2",
        }}
        loop={false}
        className="foundations-swiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            {/* On passe reverse si c'est la 2ème slide, etc. pour varier le design */}
            <Slide {...slide} reverse={index % 2 !== 0} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IMPORTANT : Tes boutons DIV doivent être ici (ou dans App.tsx) 
        avec ces classes EXACTES pour que Swiper les reconnaisse.
      */}
      <div className="left-arrow-2 w-slider-arrow-left" role="button" aria-label="Previous slide">
        <div className="icon w-icon-slider-left"></div>
      </div>
      
      <div className="right-arrow-2 w-slider-arrow-right" role="button" aria-label="Next slide">
        <div className="icon w-icon-slider-right"></div>
      </div>
    </div>
  );
}


