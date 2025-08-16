import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import FilterBar from "./components/FilterBar.tsx";
import Player from "./components/Player.tsx";
import Gallery from "./components/Gallery.tsx";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  return (
    <div className={`app-container ${!menuOpen ? "sidebar-hidden" : ""}`}>
      <Header />
      <Sidebar isOpen={menuOpen} />
      <div className="content-area">
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterSelect={setSelectedFilter}
        />
        <Player
          selected={selectedSlide}
          onClose={() => setSelectedSlide(null)}
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
