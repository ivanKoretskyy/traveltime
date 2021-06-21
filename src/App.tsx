import React from 'react';
import './App.css';

import {Nav} from './Nav'

export const ThemeContext = React.createContext('blue')

function App() {
  return (
    <ThemeContext.Provider value={'green'}>
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
