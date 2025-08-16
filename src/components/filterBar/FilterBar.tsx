import React from "react";
import Filtre from "./Filtre.tsx";
import filterData from "../../data/filterData.json";

type FilterBarProps = {
  selectedFilter: string;
  onFilterSelect: (filterName: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilter,
  onFilterSelect,
}) => {
  const filters: string[] = filterData.filters;

  return (
    <div className="filter-bar">
      {filters.map((filterName) => (
        <Filtre
          key={filterName}
          name={filterName}
          onClick={() => onFilterSelect(filterName)}
          isActive={selectedFilter === filterName}
        />
      ))}
    </div>
  );
};

export default FilterBar;
