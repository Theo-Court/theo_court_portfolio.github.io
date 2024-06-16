import React from 'react';
import photo from '../img/photo.jpg'; // Ensure you place your photo in the public/img folder

const Main = () => {
    return (
        <main>
            <section>
                <div id="profile">
                    <img src={photo} alt="Photo de Théo Court" className="profile-photo" />
                </div>
            </section>
            <section>
                <h2>Quelques informations</h2>
                <ul>
                    <li><strong>Nom:</strong> Court</li>
                    <li><strong>Prénom:</strong> Théo</li>
                    <li><strong>Date de naissance:</strong> 12 juillet 2002, Beaumont</li>
                </ul>
                <h3>Centres d'intérêts:</h3>
                <p>Écouter de la musique (rock, rap, métal, ...), lire des livres en tous genres, jouer aux jeux vidéos</p>
                <h3>Sports:</h3>
                <p>Natation, musculation</p>
            </section>
        </main>
    );
};

export default Main;
