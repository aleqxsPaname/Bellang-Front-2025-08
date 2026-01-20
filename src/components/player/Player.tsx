import React, { useState, useMemo } from "react";
import { useDiaporamaStructure } from "../../data/services/structureDuDiaporama/useDiaporamaStructure";
import { useDiaporamaVersion } from "../../data/services/versionDuDiaporama/useDiaporamaVersion";
import Carousel from "./carousel/Carousel";
import "./Player.css";

type PlayerProps = {
  selected: number | null;
  onClose: () => void;
};

const Player: React.FC<PlayerProps> = ({ selected, onClose }) => {
  const { diaporamaStructure, loading, error } =
    useDiaporamaStructure(selected);
  const {
    diaporamaVersionUne: diaporamaVersionEn,
    loadingVersionUne: loadingVersionEn,
    errorVersionUne: errorVersionEn,
  } = useDiaporamaVersion(selected, "en");
  const {
    diaporamaVersionUne: diaporamaVersionFr,
    loadingVersionUne: loadingVersionFr,
    errorVersionUne: errorVersionFr,
  } = useDiaporamaVersion(selected, "fr");

  // État pour la navigation du carrousel
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const getClassName = (value: number | null): string =>
    value ? "player" : "player-hidden";

  // Transformation des données pour le carrousel
  const slides = useMemo(() => {
    if (!diaporamaStructure || !diaporamaVersionEn || !diaporamaVersionFr) {
      return [];
    }

    return diaporamaStructure.images.map((image, index) => ({
      id: index,
      imageUrl: image,
      phraseEn:
        diaporamaVersionEn.phrases[index] || "Phrase EN non disponible",
      phraseFr:
        diaporamaVersionFr.phrases[index] || "Phrase FR non disponible",
      slideNumber: index + 1,
      totalSlides: diaporamaStructure.nombre_slides,
    }));
  }, [diaporamaStructure, diaporamaVersionEn, diaporamaVersionFr]);

  // Fonctions de navigation
  const nextSlide = () => {
    if (
      diaporamaStructure &&
      currentSlideIndex < diaporamaStructure.nombre_slides - 1
    ) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (
      diaporamaStructure &&
      index >= 0 &&
      index < diaporamaStructure.nombre_slides
    ) {
      setCurrentSlideIndex(index);
    }
  };

  // Reset de l'index quand on change de diaporama
  React.useEffect(() => {
    setCurrentSlideIndex(0);
  }, [selected]);

  return (
    <div className={getClassName(selected)}>
      {loading && <p>Chargement du diaporama...</p>}
      {error && <p style={{ color: "red" }}>Erreur structure: {error}</p>}
      {(loadingVersionEn || loadingVersionFr) && (
        <p>Chargement des phrases...</p>
      )}
      {(errorVersionEn || errorVersionFr) && (
        <p style={{ color: "red" }}>
          Erreur version: {errorVersionEn || errorVersionFr}
        </p>
      )}

      {selected && diaporamaStructure && diaporamaVersionEn && diaporamaVersionFr ? (
        // ICI ON TESTE LE CARROUSEL ! 🎬
        <div>
          {slides.length > 0 ? (
            <Carousel
              slides={slides}
              currentIndex={currentSlideIndex}
              onNext={nextSlide}
              onPrevious={previousSlide}
              onSlideChange={goToSlide}
            />
          ) : (
            <p className="text-center text-gray-500">
              Aucun slide disponible pour le carrousel
            </p>
          )}

          {/* Debug info */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
            <p>
              <strong>Debug:</strong>
            </p>
            <p>Nombre de slides: {slides.length}</p>
            <p>Index actuel: {currentSlideIndex}</p>
            <p>Structure chargée: {diaporamaStructure ? "OUI" : "NON"}</p>
            <p>Version EN chargée: {diaporamaVersionEn ? "OUI" : "NON"}</p>
            <p>Version FR chargée: {diaporamaVersionFr ? "OUI" : "NON"}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>Aucun diaporama n'a pu être récupéré</p>
          <p>selected: {selected}</p>
          <p>structure: {diaporamaStructure ? "OK" : "NULL"}</p>
          <p>version EN: {diaporamaVersionEn ? "OK" : "NULL"}</p>
          <p>version FR: {diaporamaVersionFr ? "OK" : "NULL"}</p>
        </div>
      )}

      {selected && (
        <button className="boutonFermer" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Player;
