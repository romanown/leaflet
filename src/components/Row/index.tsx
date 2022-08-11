import type { FC } from 'react';

import styles from './Row.module.css';

import SelectItem from 'components/Select';
import type { rowDataType } from 'types/lists';

const Row: FC<rowDataType> = ({ name, start, end }: rowDataType) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div>{name}</div>
      <div>
        <SelectItem item={start} />
      </div>
      <div>
        <SelectItem item={end} />
      </div>
    </div>
  </div>
);
export default Row;
