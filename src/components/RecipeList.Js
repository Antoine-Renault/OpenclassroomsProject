// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', image: 'spaghetti.jpg' },
  { id: 2, title: 'Chicken Curry', image: 'chicken-curry.jpg' },
  { id: 3, title: 'Grilled Salmon', image: 'grilled-salmon.jpg' }
];

function RecipeList() {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
