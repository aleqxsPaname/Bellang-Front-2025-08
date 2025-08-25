import React from "react";
import MiniatureImageBloc from "./MiniatureImageBloc";
import MiniatureTextBloc from "./MiniatureTextBloc";
import type { Diaporama } from "../../data/model/diaporama.tsx";
import "./miniatureBloc.css";

type MiniatureProps = {
  diaporama: Diaporama;
  onClick: () => void;
};

const Miniature: React.FC<MiniatureProps> = ({ diaporama, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <MiniatureImageBloc src={diaporama.image} alt={diaporama.titre} />
      <MiniatureTextBloc
        titre={diaporama.titre}
        date={diaporama.date_creation}
        hashtags={diaporama.hashtag}
      />
    </div>
  );
};

export default Miniature;
