import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers);
const middlewares = [thunk];

export function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
