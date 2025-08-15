import React from "react";

type PlayerProps = {
  selected: number | null;
};

const Player: React.FC<PlayerProps> = ({ selected }) => {
  return (
    <div className="player">
      {selected
        ? `Diaporama en cours : ${selected}`
        : "Sélectionnez un diaporama"}
    </div>
  );
};

export default Player;
