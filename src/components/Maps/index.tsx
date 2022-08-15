import type { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './Maps.module.css';

const Maps: FC = (): any => {
  const recievedData = useSelector((state: any) => state.app);
  return (
    <div className={styles.main}>
      <div>map</div>
      <div>{JSON.stringify(recievedData)}</div>
    </div>
  );
};
export default Maps;
