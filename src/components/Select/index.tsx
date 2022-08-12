import { Select } from 'antd';
import type { FC } from 'react';

import 'antd/dist/antd.min.css';
import styles from './Select.module.css';

import { listCity } from 'data/lists';

const { Option } = Select;

type itemType = {
  item: string;
  currentPos: string;
  onPosChange: Function;
};

const SelectItem: FC<itemType> = ({ item, currentPos, onPosChange }: itemType) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    onPosChange(value);
  };

  const onSearch = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.main}>
      <div>{item}</div>
      <div>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
          }
          defaultValue={currentPos}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {listCity.map((city) => (
            <Option key={city.name} value={city.name}>
              {city.name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};
export default SelectItem;
