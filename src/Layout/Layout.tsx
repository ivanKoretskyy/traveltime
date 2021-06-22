import * as React from 'react';

import {Nav} from '../Nav'
import { PageContainer } from '../PageContainer';
 
import styles from './Layout.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Nav/>
      <PageContainer/>
    </div>
  )
}