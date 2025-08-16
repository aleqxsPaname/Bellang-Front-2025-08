import React from "react";

type ScrollButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  isVisible: boolean;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
  isVisible,
}) => {
  if (!isVisible) return null;

  const arrowIcon = direction === "left" ? "‹" : "›";

  return (
    <button
      className={`scroll-button scroll-button-${direction}`}
      onClick={onClick}
      aria-label={`Scroll ${
        direction === "left" ? "vers la gauche" : "vers la droite"
      }`}
    >
      <span className="scroll-button-icon">{arrowIcon}</span>
    </button>
  );
};

export default ScrollButton;
