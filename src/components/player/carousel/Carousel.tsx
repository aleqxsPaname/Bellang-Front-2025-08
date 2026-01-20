import React from "react";
import Slide from "./Slide";

type SlideData = {
  id: number;
  imageUrl: string;
  phraseEn: string;
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
  onPrevious,
  onSlideChange,
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

      {/* Indicateurs de navigation avec numéros */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSlideChange(index)}
            style={{ border: "2px solid #800a97" }}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200 ${
              index === currentIndex
                ? "bg-blue-600 text-white scale-110 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Informations de navigation */}
      <div className="text-center mt-4 text-sm text-gray-600">
        <p>Utilisez les flèches ou cliquez sur les indicateurs pour naviguer</p>
        <p className="mt-1">
          {currentIndex + 1} sur {slides.length} slides
        </p>
      </div>
    </div>
  );
};

export default Carousel;
