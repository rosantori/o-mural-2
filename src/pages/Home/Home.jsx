import React from 'react';
import logo from 'assets/logo-completa.svg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img className="logo" src={logo} alt="o Mural" />
    </div>
  );
}

export { Home };
