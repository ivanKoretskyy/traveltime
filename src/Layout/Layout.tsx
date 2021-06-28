import * as React from 'react';

import {Nav} from '../Nav'
import { PageContainer } from '../PageContainer';
 
import styles from './Layout.module.css';
import { History } from 'history';

type Props = {
  history: History
}

export const Layout: React.FC<Props> = props => {
  return (
    <div className={styles.layout}>
      <Nav history={props.history}/>
      <PageContainer history={props.history}/>
    </div>
  )
}