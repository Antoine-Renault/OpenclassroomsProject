// src/pages/AllRecipes.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes.json';

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipes data from the JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="all-recipes">
      <h2>All Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
