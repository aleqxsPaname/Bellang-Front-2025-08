import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import FilterBar from "./components/filterBar/FilterBar.tsx";
import Player from "./components/player/Player.tsx";
import Gallery from "./components/gallery/Gallery.tsx";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // Auto-scroll vers le Player quand une miniature est sélectionnée
  useEffect(() => {
    if (selectedSlide !== null) {
      // Délai de 100ms pour laisser le Player s'afficher
      setTimeout(() => {
        const playerElement = document.querySelector(".player");
        if (playerElement) {
          playerElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [selectedSlide]);

  return (
    <div className={`app-container ${!menuOpen ? "sidebar-hidden" : ""}`}>
      <Header />
      <Sidebar isOpen={menuOpen} />
      <div className="content-area">
        <Player
          selected={selectedSlide}
          onClose={() => setSelectedSlide(null)}
        />
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterSelect={setSelectedFilter}
        />
        <Gallery onSelect={setSelectedSlide} selectedFilter={selectedFilter} />
      </div>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </div>
  );
};

export default App;
