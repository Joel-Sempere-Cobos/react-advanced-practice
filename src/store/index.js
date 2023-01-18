import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers.js';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import * as auth from '../components/auth/service.js';
import * as adverts from '../components/adverts/service.js';

const reducer = combineReducers(reducers);
const middlewares = [thunk.withExtraArgument({ api: { auth, adverts } })];

export function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
