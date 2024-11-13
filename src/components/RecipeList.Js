import React, { useState } from 'react';
import RecipeFilter from '../components/RecipeFilter'; 
import recipesData from '../data/recipes.json';

function RecipeList() {
  const [filters, setFilters] = useState({
    cuisine: '',
    occasion: '',
    meal: '',
    type: ''
  });

  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  const applyFilters = (filters) => {
    let filtered = recipesData;

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filtered = filtered.filter(recipe =>
          recipe[key].toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });

    setFilteredRecipes(filtered);
  };

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  return (
    <div>
      <RecipeFilter onFilterChange={handleFilterChange} />
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))
        ) : (
          <p>Aucune recette ne correspond à vos filtres</p>
        )}
      </div>
    </div>
  );
}

export default RecipeList;
