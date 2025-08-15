import React from "react";
import Miniature from "./Miniature.tsx";

type GalleryProps = {
  onSelect: (id: number) => void;
};

const Gallery: React.FC<GalleryProps> = ({ onSelect }) => {
  const galleryItems: number[] = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="gallery-section">
      <div className="gallery-title">Sélectionnez un diaporama</div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <Miniature
            key={item}
            title={`Miniature ${item}`}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
