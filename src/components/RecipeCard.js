// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default RecipeCard;
