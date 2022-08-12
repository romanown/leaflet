import type { FC } from 'react';
import { useState } from 'react';

import styles from './Row.module.css';

import SelectItem from 'components/Select';
import type { rowDataType } from 'types/lists';

const Row: FC<rowDataType> = ({ name, start, end }: rowDataType) => {
  const [currentPosStart, setCurrentPosStart] = useState('');
  const [currentPosEnd, setCurrentPosEnd] = useState('');
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div>{name}</div>
        <div>
          <SelectItem item={start} currentPos={currentPosStart} onPosChange={setCurrentPosStart} />
        </div>
        <div>
          <SelectItem item={end} currentPos={currentPosEnd} onPosChange={setCurrentPosEnd} />
        </div>
      </div>
    </div>
  );
};
export default Row;
