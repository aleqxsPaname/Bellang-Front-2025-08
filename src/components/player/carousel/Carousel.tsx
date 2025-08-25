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
    <div className="carousel-container relative">
      {/* Bouton Précédent */}
      <button
        onClick={onPrevious}
        disabled={isFirstSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
          isFirstSlide
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:scale-110"
        }`}
        aria-label="Slide précédent"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Bouton Suivant */}
      <button
        onClick={onNext}
        disabled={isLastSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
          isLastSlide
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:scale-110"
        }`}
        aria-label="Slide suivant"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide actuel */}
      <div className="slide-wrapper">
        <Slide
          imageUrl={currentSlide.imageUrl}
          phraseEn={currentSlide.phraseEn}
          slideNumber={currentSlide.slideNumber}
          totalSlides={currentSlide.totalSlides}
        />
      </div>

      {/* Indicateurs de navigation avec numéros */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSlideChange(index)}
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
