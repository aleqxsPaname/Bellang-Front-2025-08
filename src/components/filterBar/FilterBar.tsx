import React, { useRef, useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";
import Filtre from "./Filtre";
import filterData from "../../data/filterData.json";

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

      {/* Container des filtres */}
      <div className="filter-bar" ref={scrollContainerRef}>
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
