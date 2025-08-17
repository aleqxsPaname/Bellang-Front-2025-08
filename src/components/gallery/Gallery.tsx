import React from "react";
import Miniature from "./Miniature.tsx";
import listeDiaporama from "../../data/listeDiaporama.json";

type GalleryProps = {
  onSelect: (id: number) => void;
  selectedFilter: string;
};

const diaporamaItems = listeDiaporama.liste_diaporama;

const Gallery: React.FC<GalleryProps> = ({ onSelect, selectedFilter }) => {
  return (
    <div className="gallery-section">
      <div className="gallery-title">
        Diaporamas correspondant au filtre: {selectedFilter}
      </div>
      <div className="gallery-grid">
        {diaporamaItems.map((item) => (
          <Miniature
            key={item.id}
            title={item.titre}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
