import { createStore, combineReducers } from 'redux';
import { auth, adverts } from './reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers({ auth, adverts });

export function configureStore() {
  const store = createStore(reducer, composeWithDevTools());
  return store;
}
