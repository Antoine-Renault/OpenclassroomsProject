// src/components/RecipeCard.js
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={`./assets/images/${recipe.image}`} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </div>
  );
}

export default RecipeCard;
