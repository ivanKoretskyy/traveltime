import React from 'react';
import './App.css';

import { Layout } from './Layout'

export const ThemeContext = React.createContext('blue')

function App() {
  return (
    <ThemeContext.Provider value={'green'}>
      <Layout/>
    </ThemeContext.Provider>

  );
}

export default App;
