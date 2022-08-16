import { FETCH_REQUESTED, FETCH_SUCCEEDED } from './types';

import { getDataById } from 'store/api/dataById';

export const fetchDatas =
  () =>
  async (dispatch: any): Promise<any> => {
    const resp = await getDataById();
    dispatch({ type: FETCH_REQUESTED, payload: resp });
  };

export const setCurrent =
  (data: any) =>
  async (dispatch: any): Promise<any> => {
    dispatch({ type: FETCH_SUCCEEDED, payload: data });
  };
