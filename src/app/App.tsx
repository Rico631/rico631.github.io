import React from 'react';
import logo from './logo.svg';
import About from '../features/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <About />
      </header>
    </div>
  );
}

export default App;
