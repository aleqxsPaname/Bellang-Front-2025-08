import React from "react";

type PlayerProps = {
  selected: number | null;
  onClose: () => void; // callback pour "fermer"
};

const Player: React.FC<PlayerProps> = ({ selected, onClose }) => {
  const getText = (value: number | null) => {
    return value
      ? `Diaporama en cours : ${value}`
      : "Aucun diaporama n'est sélectionné";
  };

  const getClassName = (value: number | null) => {
    return value ? "player" : "player-hidden";
  };

  return (
    <div className={getClassName(selected)}>
      <p>{getText(selected)}</p>
      {selected && (
        <button className="boutonFermer" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Player;
