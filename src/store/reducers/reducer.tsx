import { FETCH_SUCCEEDED } from '../actions';

const initState = {
  posts: null,
};

type actionType = {
  type: string;
  payload: any;
};

export const reducer = (state = initState, action: actionType): any => {
  switch (action.type) {
    case FETCH_SUCCEEDED: {
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
