import React from 'react';
import './App.css';
import { createBrowserHistory, History } from 'history';


import { Layout } from './Layout'

export const ThemeContext: React.Context<string> = React.createContext('blue')
const history: History = createBrowserHistory({basename: '/'});
function App() {
  return (
    <ThemeContext.Provider value={'grey'}>
      <Layout history={history}/>
    </ThemeContext.Provider>

  );
}

export default App;
