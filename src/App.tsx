import React from 'react';
import Calculator from './components/Calculator/calculator';


import './App.css';

export const App = () => {
  return (
    <div className="app">
      <p>
        My calculator
      </p>
      <Calculator/>
    </div>
  );
}

export default App;