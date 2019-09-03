import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/Link';
import AWGCalculator from "./AWGCalculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AWGCalculator />
      </header>
    </div>
  );
}

export default App;
