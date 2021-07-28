import * as React from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { History } from 'history'
import { JSConcept} from '../JSConcept';
import { About } from '../About';
import { Chicago } from '../Chicago';

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
          <Route path='/jsconcept' component={JSConcept}/>
          <Route path='/about' component={About}/>
          <Route path='/chicago' component={Chicago}/>
          <Route path='/' exact={true}  component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}