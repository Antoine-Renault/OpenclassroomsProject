// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1><Link to="/">Joshua Weissman Recipes</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">All Recipes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
