import React from "react";

type MiniatureProps = {
  title: string;
  onClick: () => void;
};

const Miniature: React.FC<MiniatureProps> = ({ title, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      {title}
    </div>
  );
};

export default Miniature;
