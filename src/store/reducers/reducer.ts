import { FETCH_REQUESTED, FETCH_SUCCEEDED } from '../types';

export const initState = {
  posts: null,
  current: null,
};

type actionType = {
  type: string;
  payload: any;
};

export const reducer = (state = initState, action: actionType): any => {
  switch (action.type) {
    case FETCH_SUCCEEDED: {
      const current = action.payload;
      return {
        ...state,
        current,
      };
    }
    case FETCH_REQUESTED: {
      const posts = action.payload;
      return {
        ...state,
        posts,
      };
    }
    default:
      return state;
  }
};
