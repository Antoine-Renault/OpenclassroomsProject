// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Joshua Weissman's Recipes</h2>
      <p>Explore our collection of delicious recipes.</p>
      <Link to="/recipes">View All Recipes</Link>
    </div>
  );
}

export default Home;
