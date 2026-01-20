import React from "react";

type SlideProps = {
  imageUrl: string;
  phraseEn: string;
  slideNumber: number;
  totalSlides: number;
};

const Slide: React.FC<SlideProps> = ({
  imageUrl,
  phraseEn,
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="slide-container bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
      {/* En-tête avec numéro du slide */}
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {Array.from({ length: totalSlides }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === slideNumber - 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image du slide */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={`Slide ${slideNumber}`}
          className="w-full h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImage non disponible%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Phrase en anglais */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-start space-x-2">
          <span className="text-blue-600 font-medium text-sm">EN:</span>
          <p className="text-gray-800 text-sm leading-relaxed flex-1">
            {phraseEn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
