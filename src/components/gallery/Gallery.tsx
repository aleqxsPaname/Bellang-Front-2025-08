import React from "react";
import Miniature from "./Miniature.tsx";
import listeDiaporama from "../../data/dataSet/diaporamas/listeDiaporama.json";
import type { Diaporama } from "../../data/model/diaporama.tsx";

type GalleryProps = {
  onSelect: (id: number) => void;
  selectedFilter: string;
};

const diaporamaItems: Diaporama[] = listeDiaporama.liste_diaporama;

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
            diaporama={item as Diaporama}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
