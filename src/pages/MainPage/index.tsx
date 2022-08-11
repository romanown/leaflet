import type { FC } from 'react';

import styles from './MainPage.module.css';

import List from 'components/List';
import Maps from 'components/Maps';

const MainPage: FC = () => (
  <div className={styles.main}>
    Table
    <div className={styles.table}>
      <List />
      <Maps />
    </div>
  </div>
);
export default MainPage;
