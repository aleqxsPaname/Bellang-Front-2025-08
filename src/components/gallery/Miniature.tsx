import React from "react";
import type { Diaporama } from "../../data/diaporamas/diaporama";

type MiniatureProps = {
  diaporama: Diaporama;
  onClick: () => void;
};

const Miniature: React.FC<MiniatureProps> = ({ diaporama, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <p>Titre: {diaporama.titre}</p>
      <p>Description: {diaporama.description}</p>
      <img src={diaporama.image} alt={diaporama.titre} />
    </div>
  );
};

export default Miniature;
