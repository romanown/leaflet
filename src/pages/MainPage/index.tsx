import type { FC } from 'react';

import List from '../../components/List';

import styles from './MainPage.module.css';

const MainPage: FC = () => (
  <div className={styles.main}>
    Table
    <div className={styles.table}>
      <List />
      <div>map</div>
    </div>
  </div>
);
export default MainPage;
