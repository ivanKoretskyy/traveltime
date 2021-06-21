import * as React from 'react';
import { ThemeContext } from '../App';

export interface NavProps {
  
}
 
export const Nav: React.FC<NavProps> = () => {

  const themeContext = React.useContext(ThemeContext)
  React.useEffect(() => {console.info('didMount')}, [])
  return (
    <div style={{backgroundColor: themeContext}}>
      Nav
    </div>
  );
}
