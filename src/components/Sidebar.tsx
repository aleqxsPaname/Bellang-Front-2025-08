import React from "react";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-section">
        <ul className="sidebar-menu">
          <li>Abonnements</li>
          <li>Historique</li>
          <li>Favoris 1</li>
          <li>Favoris 2</li>
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
