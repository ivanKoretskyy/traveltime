import * as React from 'react';
import { ThemeContext } from '../App';
import { History } from 'history'
import { Router, Link } from 'react-router-dom';
export interface NavProps {
  history: History;
}
 
export const Nav: React.FC<NavProps> = props => {

  const themeContext = React.useContext(ThemeContext)
  React.useEffect(() => {console.info('didMount')}, [])
  return (
    <div style={{backgroundColor: themeContext}}>
      <Router history={props.history}>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/jsconcept'>jsconcept</Link>
      </Router>
    </div>
  );
}
