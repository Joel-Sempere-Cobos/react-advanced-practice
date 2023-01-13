import { ADVERTS_LOADED, AUTH_LOGIN, AUTH_LOGOUT } from './types.js';

const defaultState = {
  auth: false,
  adverts: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, auth: true };
    case AUTH_LOGOUT:
      return { ...state, auth: false };
    case ADVERTS_LOADED:
      return { ...state, adverts: action.payload };
    default:
      return state;
  }
}
