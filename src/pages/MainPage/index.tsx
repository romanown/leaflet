import type { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MainPage.module.css';

import List from 'components/List';
import Maps from 'components/Maps';
import { fetchDatas } from 'store/actions';
import type { RootState } from 'store/store';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const currentRow = useSelector((state: RootState) => state.current);
  useEffect(() => {
    dispatch(fetchDatas('1'));
  }, []);

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
