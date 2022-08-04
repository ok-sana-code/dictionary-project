import React from 'react';
import Dictionary from "./Dictionary"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <h1>My first Dictionary</h1>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}


