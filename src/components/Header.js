import React from 'react';
import './Header.css';

export default () => {
  return (
    <header className="black">
      <div className="header--logo">
        <h1>AlonsoFlix</h1>
        <button className="botau">Cadastra-se</button>
        <button className="botaus">Login</button>
      </div>
    </header>
  );
}