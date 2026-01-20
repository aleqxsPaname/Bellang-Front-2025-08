import React from "react";

type MiniatureTextBlocProps = {
  titre: string;
  date: string;
  hashtags: string[];
};

const MiniatureTextBloc: React.FC<MiniatureTextBlocProps> = ({
  titre,
  date,
  hashtags,
}) => {
  return (
    <div className="text-miniature">
      <h3 className="miniature-title">{titre}</h3>
      <div className="date-hashtags-row">
        <p className="miniature-date">{date}</p>
        <span className="hashtags-container">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="hashtag-item">
              {hashtag.toUpperCase()}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default MiniatureTextBloc;
