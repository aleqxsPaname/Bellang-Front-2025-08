import React from "react";

type MiniatureImageBlocProps = {
  src: string;
  alt: string;
};

const MiniatureImageBloc: React.FC<MiniatureImageBlocProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="image-miniature">
      <img src={src} alt={alt} />
    </div>
  );
};

export default MiniatureImageBloc;
