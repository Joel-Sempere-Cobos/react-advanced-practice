import { createStore } from 'redux';
import reducer from './reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';

export function configureStore() {
  const store = createStore(reducer, composeWithDevTools());
  return store;
}
