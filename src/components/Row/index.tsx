import type { FC } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Row.module.css';

import SelectItem from 'components/Select';
import { fetchDatas, setCurrent } from 'store/actions';
import type { rowDataType } from 'types/lists';

const Row: FC<rowDataType> = ({ name, start, end }: rowDataType) => {
  const [currentPos, setCurrentPos] = useState({ start: start || '', end: end || '' });
  const dispatch = useDispatch();
  const getData = (pos: string, currPos: any) => {
    setCurrentPos((prev) => ({ ...prev, [pos]: currPos }));
    // @ts-ignore
    dispatch(fetchDatas());
    // @ts-ignore
    dispatch(setCurrent(currentPos));
  };
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div>{name}</div>
        <div>
          <SelectItem
            item={start}
            currentPos={currentPos.start}
            onPosChange={(val: any) => {
              getData('start', val);
            }}
          />
        </div>
        <div>
          <SelectItem
            item={end}
            currentPos={currentPos.end}
            onPosChange={(val: any) => {
              getData('end', val);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Row;
