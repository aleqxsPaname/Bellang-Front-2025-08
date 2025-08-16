import React from "react";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-section">
        <ul className="sidebar-menu">
          <li>Mes Parametres</li>
          <li>Historique</li>
          <li>Abonnements</li>
          <li>Mes filtres favoris</li>
          <li>Favoris 3</li>
          <li>Favoris 4</li>
          <li>Favoris 5</li>
          <li>Favoris 6</li>
          <li>Favoris 7</li>
          <li>Favoris 8</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
