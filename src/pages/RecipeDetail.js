import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function Recipedetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const ingredients = recipe.ingredients ? (
    recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
  ) : (
    <li>No ingredients available</li>
  );

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>{ingredients}</ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipedetail;
