import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import FilterBar from "./components/FilterBar.tsx";
import Player from "./components/Player.tsx";
import GallerySection from "./components/GallerySection.tsx";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

  return (
    <div className={`app-container ${!menuOpen ? "sidebar-hidden" : ""}`}>
      <Header />
      <Sidebar isOpen={menuOpen} />
      <div className="content-area">
        <FilterBar />
        <Player selected={selectedSlide} />
        <GallerySection onSelect={setSelectedSlide} />
      </div>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </div>
  );
};

export default App;
