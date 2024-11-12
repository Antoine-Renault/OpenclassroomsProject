import React from 'react';

function RecipeFilter({ onFilterChange }) {
  return (
    <div className="recipe-filter">
      <label>
        Cuisine:
        <select onChange={(e) => onFilterChange('cuisine', e.target.value)}>
          <option value="">All</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          {/* Add more cuisines as needed */}
        </select>
      </label>

      <label>
        Occasion:
        <select onChange={(e) => onFilterChange('occasion', e.target.value)}>
          <option value="">All</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          {/* Add more occasions as needed */}
        </select>
      </label>

      <label>
        Meal:
        <select onChange={(e) => onFilterChange('meal', e.target.value)}>
          <option value="">All</option>
          <option value="Main">Main</option>
          <option value="Side">Side</option>
          {/* Add more meal types as needed */}
        </select>
      </label>

      <label>
        Type:
        <select onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="">All</option>
          <option value="Pasta">Pasta</option>
          <option value="Curry">Curry</option>
          <option value="Seafood">Seafood</option>
          {/* Add more types as needed */}
        </select>
      </label>
    </div>
  );
}

export default RecipeFilter;
