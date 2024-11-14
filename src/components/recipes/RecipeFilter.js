import React from 'react';
import filterOptions from '../../data/filterOptions.json';

function RecipeFilter({ onFilterChange }) {
  return (
    <div className="recipe-filter">
      {filterOptions.map(({ label, key, options }) => (
        <label key={key}>
          {label}:
          <select onChange={(e) => onFilterChange(key, e.target.value)}>
            {options.map((option) => (
              <option key={option} value={option === "Tout" ? "" : option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}

export default RecipeFilter;
