// src/components/RecipeDetail.js
import React from 'react';

function RecipeDetail({ recipe }) {
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={`./assets/images/${recipe.image}`} alt={recipe.title} />
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
