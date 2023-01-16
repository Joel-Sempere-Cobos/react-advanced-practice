import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers(reducers);

export function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools());
  return store;
}
