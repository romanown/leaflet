import type { FC } from 'react';
import { Children } from 'react';

import styles from './List.module.css';

import Row from 'components/Row';
import { listData } from 'data/lists';
import type { rowDataType } from 'types/lists';

const List: FC = () => (
  <div className={styles.main}>
    Table
    <div>
      {Children.toArray(
        listData.map((item: rowDataType) => (
          <div>
            <Row {...item} />
          </div>
        )),
      )}
    </div>
  </div>
);
export default List;
