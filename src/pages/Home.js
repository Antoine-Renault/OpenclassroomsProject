import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard'; // Import RecipeCard

const trendingRecipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    image: '/assets/images/spaghetti.jpg',
  },
  {
    id: 2,
    title: 'Chicken Curry',
    image: '/assets/images/chicken-curry.jpg',
  },
  {
    id: 3,
    title: 'Grilled Salmon',
    image: '/assets/images/salmon.jpg',
  },
];

function Home() {
  return (
    <div className="home">
      <h2>Bienvenue sur Marmite</h2>
      <p>Explorez notre collection de délicieuses recettes</p>
      <Link to="/recipes">Voir toutes les recettes</Link>

      <section className="trending-recipes">
        <h3>Trending Recipes</h3>
        <div className="recipe-list">
          {trendingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} /> // Use RecipeCard component here
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
