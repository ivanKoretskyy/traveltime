import * as React from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { History } from 'history'

import styles from './PageContainer.module.css';

type Props = {
  history: History;
}

export const PageContainer: React.FC<Props> = props => {
  return (
    <div className={styles.Container}>
      <Router history={props.history}>
        <Switch>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}