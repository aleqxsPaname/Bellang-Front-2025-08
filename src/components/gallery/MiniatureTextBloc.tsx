import React from "react";

type MiniatureTextBlocProps = {
  titre: string;
  date: string;
};

const MiniatureTextBloc: React.FC<MiniatureTextBlocProps> = ({
  titre,
  date,
}) => {
  return (
    <div className="text-miniature">
      <h3 className="miniature-title">{titre}</h3>
      <p className="miniature-date">{date}</p>
    </div>
  );
};

export default MiniatureTextBloc;
