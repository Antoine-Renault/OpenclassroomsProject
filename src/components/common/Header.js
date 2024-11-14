import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1><Link to="/">Marmite</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/recipes">Recettes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
