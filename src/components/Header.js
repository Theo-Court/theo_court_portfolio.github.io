import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Court <span>Théo</span></Link>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/CV">CV</Link></li>
          <li><Link to="/competence/1">Compétence 1</Link></li>
          <li><Link to="/competence/2">Compétence 2</Link></li>
          <li><Link to="/competence/3">Compétence 3</Link></li>
          <li><Link to="/competence/4">Compétence 4</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
