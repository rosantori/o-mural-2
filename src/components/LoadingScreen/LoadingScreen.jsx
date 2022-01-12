import React from 'react';
import './LoadingScreen.css';
import loading from 'assets/loading-letters.svg';

function LoadingScreen() {
  const speed = 7;

  return (<div className='loadingScreen-container'>
      <img
        style={{animation: `loadingScreen-img ${speed}s linear infinite`}}
        src={loading}
        alt="Loading"
      />
    </div>);
}

export { LoadingScreen };
