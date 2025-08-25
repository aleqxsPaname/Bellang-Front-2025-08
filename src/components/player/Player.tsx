import React from "react";
import {
  useDiaporamaStructure,
  type DiaporamaStructure,
} from "../../data/services/useDiaporamaStructure";
import {
  useDiaporamaVersionUne,
  type Version,
} from "../../data/services/useDiaporamaVersionUne";

type PlayerProps = {
  selected: number | null;
  onClose: () => void;
};

const Player: React.FC<PlayerProps> = ({ selected, onClose }) => {
  const { diaporamaStructure, loading, error } =
    useDiaporamaStructure(selected);
  const { diaporamaVersionUne, loadingVersionUne, errorVersionUne } =
    useDiaporamaVersionUne(selected);

  const getClassName = (value: number | null): string =>
    value ? "player" : "player-hidden";

  const affichageDiaporama = (
    diaporamaStructure: DiaporamaStructure,
    diaporamaVersionUne: Version
  ): JSX.Element => {
    return (
      <>
        <p>Diaporama en cours :</p>
        <p>id: {diaporamaStructure.id}</p>
        <p>date_creation: {diaporamaStructure.date_creation}</p>
        <p>nombre_slides: {diaporamaStructure.nombre_slides}</p>
        <p>hashtag: {diaporamaStructure.hashtag.join(", ")}</p>
        <p>images: {diaporamaStructure.images.join(", ")}</p>
        <p>phrases: {diaporamaVersionUne?.phrases.join(", ")}</p>
      </>
    );
  };

  return (
    <div className={getClassName(selected)}>
      {loading && <p>Chargement du diaporama...</p>}
      {error && <p style={{ color: "red" }}>Erreur structure: {error}</p>}
      {loadingVersionUne && <p>Chargement des phrases...</p>}
      {errorVersionUne && (
        <p style={{ color: "red" }}>Erreur version: {errorVersionUne}</p>
      )}

      {selected && diaporamaStructure && diaporamaVersionUne ? (
        affichageDiaporama(diaporamaStructure, diaporamaVersionUne)
      ) : (
        <div>
          <p>Aucun diaporama n'a pu être récupéré</p>
          <p>selected: {selected}</p>
          <p>structure: {diaporamaStructure ? "OK" : "NULL"}</p>
          <p>version: {diaporamaVersionUne ? "OK" : "NULL"}</p>
        </div>
      )}

      {selected && (
        <button className="boutonFermer" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Player;
