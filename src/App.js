import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 

  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
          The counter is currently&bnsp;
          <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button">Increment counter</button>
    </div>
  )
}

export default App;
