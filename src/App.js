import React, { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
    useEffect(() => {
        const loadScripts = async () => {
            const script1 = document.createElement('script');
            script1.src = '/js/three.module.js';
            script1.type = 'module';
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = '/js/index.module.js';
            script2.type = 'module';
            document.body.appendChild(script2);

            const script3 = document.createElement('script');
            script3.src = '/js/script.js';
            script3.type = 'module';
            document.body.appendChild(script3);
        };
        loadScripts();
    }, []);

    return (
        <div id="gradient">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
