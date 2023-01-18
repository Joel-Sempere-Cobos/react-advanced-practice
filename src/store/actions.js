import { login } from '../components/auth/service.js';
import {
  ADVERTS_LOADED,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  UI_RESET_ERROR,
} from './types.js';

////////// AUTH_LOGIN

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLoginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
  error: true,
});

export const authLogin = (credentials, rememberMe) => {
  return async function (dispatch, getState) {
    try {
      dispatch(authLoginRequest());
      await login(credentials, rememberMe);
      dispatch(authLoginSuccess());
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
};
/////////// AUTH_LOGOUT

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

/////////// ADVERTS

export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
});

//////////// UI

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
