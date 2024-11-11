// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Cooking Recipes</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
