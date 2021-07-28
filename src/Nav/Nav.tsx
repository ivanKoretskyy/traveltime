import * as React from 'react';
import { ThemeContext } from '../App';
import { History } from 'history'
import { Router, NavLink } from 'react-router-dom';

import s from './Nav.module.scss';
export interface NavProps {
  history: History;
}
 
export const Nav: React.FC<NavProps> = props => {

  const themeContext = React.useContext(ThemeContext)
  React.useEffect(() => {console.info('didMount')}, [])
  return (
    <div style={{backgroundColor: themeContext}} className={s.navBar} >
      <Router history={props.history}>
        <NavLink to='/' exact={true} className={s.link} activeClassName={s.active} >Home</NavLink>
        <NavLink to='/Contact' className={s.link} activeClassName={s.active}>Contact</NavLink>
        <NavLink to='/jsconcept' className={s.link} activeClassName={s.active}>jsconcept</NavLink>
        <NavLink to='/chicago' className={s.link} activeClassName={s.active}>chicago</NavLink>
        <NavLink to='/about' className={s.link} activeClassName={s.active}>about</NavLink>
      </Router>
    </div>
  );
}
