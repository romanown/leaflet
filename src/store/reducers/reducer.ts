import { FETCH_REQUESTED, FETCH_SUCCEEDED } from '../types';

const initState = {
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
      const current = action.payload.data;
      return {
        ...state,
        current,
      };
    }
    case FETCH_REQUESTED: {
      const posts = action.payload.data;
      return {
        ...state,
        posts,
      };
    }
    default:
      return state;
  }
};
