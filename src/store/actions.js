import { ADVERTS_LOADED, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types.js';

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
});
