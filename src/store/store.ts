import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { getDataById } from 'store/api/dataById';
import { reducer } from 'store/reducers/reducer';

const sagaMiddleware = createSagaMiddleware({
  context: {
    getDataById,
  },
});

export const store = createStore(
  combineReducers({
    app: reducer,
    current: reducer,
  }),
  compose(applyMiddleware(sagaMiddleware), applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
