import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href="#home" className="logo">Court <span>Théo</span></a>
            <nav className="navbar">
                <ul>
                    <li><a href="/index.html">Accueil</a></li>
                    <li><a href="/CV.html">CV</a></li>
                    <li><a href="/template/template.html">Compétence 1</a></li>
                    <li><a href="/template/template.html">Compétence 2</a></li>
                    <li><a href="/template/template.html">Compétence 3</a></li>
                    <li><a href="/template/template.html">Compétence 4</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
