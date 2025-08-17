import React, { useRef, useState } from "react";
import ScrollButton from "./ScrollButton";
import Filtre from "./Filtre";
import filterData from "../../data/filters/filterData.json";

type FilterBarProps = {
  selectedFilter: string;
  onFilterSelect: (filterName: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilter,
  onFilterSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Variables pour le drag horizontal
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const filters: string[] = filterData.filters;

  const scrollTo = (direction: "left" | "right"): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200; // Pixels à scroller
    const currentScroll = container.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // Gestion du drag horizontal
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicateur pour le scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleMouseLeave = (): void => {
    setIsDragging(false);
  };

  return (
    <div
      className="filter-bar-wrapper"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Bouton gauche */}
      <ScrollButton
        direction="left"
        onClick={() => scrollTo("left")}
        isVisible={isHovering}
      />

      {/* Container des filtres avec drag horizontal */}
      <div
        className="filter-bar"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {filters.map((filterName) => (
          <Filtre
            key={filterName}
            name={filterName}
            onClick={() => onFilterSelect(filterName)}
            isActive={selectedFilter === filterName}
          />
        ))}
      </div>

      {/* Bouton droit */}
      <ScrollButton
        direction="right"
        onClick={() => scrollTo("right")}
        isVisible={isHovering}
      />
    </div>
  );
};

export default FilterBar;
