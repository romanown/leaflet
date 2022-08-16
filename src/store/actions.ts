import type { AppDispatch } from './store';
import { FETCH_REQUESTED, FETCH_SUCCEEDED } from './types';

import { getDataById } from 'store/api/dataById';

export const fetchDatas =
  (id: string): any =>
  async (dispatch: AppDispatch): Promise<void> => {
    const resp = await getDataById(id);
    dispatch({ type: FETCH_REQUESTED, payload: resp });
  };

export const setCurrent =
  (data: any): any =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch({ type: FETCH_SUCCEEDED, payload: data });
  };
