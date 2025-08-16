import React from "react";

type FiltreProps = {
  name: string;
  onClick?: () => void;
  isActive?: boolean;
};

const Filtre: React.FC<FiltreProps> = ({ name, onClick, isActive = false }) => {
  return (
    <button
      className={`filtre-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Filtre;
