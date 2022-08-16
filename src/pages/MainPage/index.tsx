import type { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './MainPage.module.css';

import List from 'components/List';
import Maps from 'components/Maps';

const MainPage: FC = () => {
  const currentRow = useSelector((state: any) => state.current);
  return (
    <div className={styles.main}>
      Table
      <div>{JSON.stringify(currentRow)}</div>
      <div className={styles.table}>
        <List />
        <Maps />
      </div>
    </div>
  );
};
export default MainPage;
