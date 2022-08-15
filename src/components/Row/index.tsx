import type { FC } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Row.module.css';

import SelectItem from 'components/Select';
import { FETCH_REQUESTED } from 'store/actions';
import type { rowDataType } from 'types/lists';

const Row: FC<rowDataType> = ({ name, start, end }: rowDataType) => {
  const [currentPosStart, setCurrentPosStart] = useState('');
  const [currentPosEnd, setCurrentPosEnd] = useState('');
  const dispatch = useDispatch();
  const getData = (currentPos: any) => {
    setCurrentPosStart(currentPos);
    console.log('getData_dispatch', currentPos);
    dispatch({
      type: FETCH_REQUESTED,
      payload: { currentPos, id: 5 },
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div>{name}</div>
        <div>
          <SelectItem
            item={start}
            currentPos={currentPosStart}
            onPosChange={(val: any) => {
              getData(val);
            }}
          />
        </div>
        <div>
          <SelectItem item={end} currentPos={currentPosEnd} onPosChange={setCurrentPosEnd} />
        </div>
      </div>
    </div>
  );
};
export default Row;
