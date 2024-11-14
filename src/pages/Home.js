import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <h2>Bienvenue sur Marmite</h2>
      <p>Explorez notre collection de délicieuses recettes</p>
      <Link to="/recipes">Voir toutes les recettes</Link>
    </div>
  );
}

export default Home;
