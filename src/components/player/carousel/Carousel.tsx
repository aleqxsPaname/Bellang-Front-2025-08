import React from "react";
import Slide from "./Slide";

type SlideData = {
  id: number;
  imageUrl: string;
  phraseEn: string;
  phraseFr: string;
  slideNumber: number;
  totalSlides: number;
};

type CarouselProps = {
  slides: SlideData[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onSlideChange: (index: number) => void;
};

const Carousel: React.FC<CarouselProps> = ({
  slides,
  currentIndex,
  onNext,
  onPrevious
}) => {
  if (!slides.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucun slide disponible
      </div>
    );
  }

  const currentSlide = slides[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div className="carousel-container">
      {/* Slide actuel avec boutons superposés */}
      <div className="slide-wrapper">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstSlide}
          aria-label="Slide précédent"
          className="carousel-nav-button prev"
        >
          <span aria-hidden="true">&lt;</span>
        </button>

        <Slide
          imageUrl={currentSlide.imageUrl}
          phraseEn={currentSlide.phraseEn}
          phraseFr={currentSlide.phraseFr}
          slideNumber={currentSlide.slideNumber}
          totalSlides={currentSlide.totalSlides}
        />

        <button
          type="button"
          onClick={onNext}
          disabled={isLastSlide}
          aria-label="Slide suivant"
          className="carousel-nav-button next"
        >
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>

      {/* Informations de navigation */}
      <div className="text-center mt-4 text-sm text-gray-600">
    
        <p className="mt-1">
          {currentIndex + 1} sur {slides.length} slides
        </p>
      </div>
    </div>
  );
};

export default Carousel;
