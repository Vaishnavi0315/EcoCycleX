import React, { useState } from 'react';

const FilterOptions = ({ applyFilters }) => {
  const [category, setCategory] = useState('');
  const [SustainabilityMetric, setSustainabilityMetric] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ category, SustainabilityMetric });
  };

  return (
    <div className="filter-options">
      <h4>Filter Options</h4>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="urban-farms">Urban Farms</option>
          <option value="markets">Markets</option>
          <option value="educational-institutions">Educational Institutions</option>
          <option value="community-gardens">Community Gardens</option>
          <option value="food-producers">Food Producers</option>
          <option value="restaurants">Restaurants</option>
        </select>
      </label>
      <label>
        Sustainability Metric:
        <select value={SustainabilityMetric} onChange={(e) => setSustainabilityMetric(e.target.value)}>
          <option value="">All</option>
          <option value="organic">Organic</option>
          <option value="low-water">Low Water Usage</option>
          <option value="renewable-energy">Renewable Energy Usage</option>
          <option value="recycling">Recycling Practices</option>
          <option value="local-sourcing">Local Sourcing</option>
          <option value="fair-trade">Fair Trade</option>
        </select>
      </label>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
