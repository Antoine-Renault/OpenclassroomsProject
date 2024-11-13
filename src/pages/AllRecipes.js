import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeFilter from '../components/RecipeFilter';
import SearchBar from '../components/SearchBar'; 
import recipesData from '../data/recipes.json';

function AllRecipes() {
  const [filters, setFilters] = useState({
    cuisine: '',
    occasion: '',
    meal: '',
    type: '',
  });
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesSearch = recipe.title && recipe.title.includes(searchQuery); // Utilisation de recipe.title au lieu de recipe.name
    return (
      matchesSearch &&
      (filters.cuisine === '' || recipe.cuisine === filters.cuisine) &&
      (filters.occasion === '' || recipe.occasion === filters.occasion) &&
      (filters.meal === '' || recipe.meal === filters.meal) &&
      (filters.type === '' || recipe.type === filters.type)
    );
  });
  

  return (
    <div className="all-recipes">
      <SearchBar onSearch={handleSearch} /> {/* Add SearchBar here */}
      <RecipeFilter onFilterChange={handleFilterChange} />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
