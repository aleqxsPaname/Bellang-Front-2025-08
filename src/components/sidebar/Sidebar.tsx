import React from "react";
import listeFavoritesData from "../../data/listesFavorites/listeFavoritesData.json";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const listesFavoris: string[] = listeFavoritesData.listesFavorites;
  const filtresFavoris: string[] = ["Histoire", "People", "Voyages"];

  //////////////////////////////////////////////////////
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-section">
        <ul className="sidebar-menu">
          <li>Mes Parametres</li>
          <li>Historique</li>
          <li>Abonnements</li>
          <li>----------------</li>
          <li>Mes Listes favorites</li>
          {listesFavoris.map((favori, index) => (
            <li key={index}>- {favori}</li>
          ))}
          <li>(Gerer les listes)</li>
          <li>----------------</li>
          <li>Mes Filtres favoris</li>
          {filtresFavoris.map((favori, index) => (
            <li key={index}>- {favori}</li>
          ))}
          <li>(Gerer les filtres)</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
