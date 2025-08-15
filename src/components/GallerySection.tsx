import React from "react";

type GallerySectionProps = {
  onSelect: (id: number) => void;
};

const GallerySection: React.FC<GallerySectionProps> = ({ onSelect }) => {
  const galleryItems: number[] = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="gallery-section">
      <div className="gallery-title">Sélectionnez un diaporama</div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            key={item}
            className="gallery-item"
            onClick={() => onSelect(item)}
          >
            Miniature {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
