import { Select } from 'antd';
import type { FC } from 'react';

import 'antd/dist/antd.css';
import styles from './Select.module.css';

import { listCity } from 'data/lists';

const { Option } = Select;

type itemType = {
  item: string;
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const SelectItem: FC<itemType> = ({ item }: itemType) => (
  <div className={styles.main}>
    <div>{item}</div>
    <div>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        {listCity.map((city) => (
          <Option key={city.name} value={city.name}>
            {city.name}
          </Option>
        ))}
      </Select>
    </div>
  </div>
);
export default SelectItem;
