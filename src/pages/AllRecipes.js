// src/pages/AllRecipes.js
import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', image: '/assets/images/spaghetti.jpg' },
  { id: 2, title: 'Chicken Curry', image: '/assets/images/chicken-curry.jpg' },
  { id: 3, title: 'Grilled Salmon', image: '/assets/images/salmon.jpg' },
  // Add more recipes here...
];

function AllRecipes() {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (query) => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="all-recipes">
      <h2>All Recipes</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
