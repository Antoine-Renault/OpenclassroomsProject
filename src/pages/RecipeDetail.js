// src/pages/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', image: '/assets/images/spaghetti.jpg', ingredients: ['Pasta', 'Tomato sauce', 'Ground beef'], instructions: 'Cook pasta and add sauce.' },
  { id: 2, title: 'Chicken Curry', image: '/assets/images/chicken-curry.jpg', ingredients: ['Chicken', 'Curry powder', 'Coconut milk'], instructions: 'Cook chicken and add curry.' },
  { id: 3, title: 'Grilled Salmon', image: '/assets/images/salmon.jpg', ingredients: ['Salmon', 'Lemon', 'Olive oil'], instructions: 'Grill the salmon and squeeze lemon.' },
];

function Recipedetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipedetail;
