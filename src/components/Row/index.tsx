import type { FC } from 'react';

import styles from './Row.module.css';

import type { rowDataType } from 'types/lists';

const Row: FC<rowDataType> = ({ name, start, end }: rowDataType) => (
  <div className={styles.main}>
    <div>{name}</div>
    <div>{start}</div>
    <div>{end}</div>
  </div>
);
export default Row;
