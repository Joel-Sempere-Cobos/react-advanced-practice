import { areAdvertsLoaded, getAdvertByIdRedux } from './selectors.js';
import {
  ADVERTS_LOADED_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  ADVERT_LOADED_REQUEST,
  ADVERT_LOADED_SUCCESS,
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
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(authLoginRequest());
      await api.auth.login(credentials, rememberMe);
      dispatch(authLoginSuccess());
    } catch (error) {
      dispatch(authLoginFailure(error));
      throw error;
    }
  };
};
/////////// AUTH_LOGOUT

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

/////////// ADVERTS

export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST,
});

export const advertsLoadedSuccess = (adverts) => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});

export const advertsLoadedFailure = (error) => ({
  type: ADVERTS_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const advertsLoad = () => {
  return async function (dispatch, getState, { api }) {
    const areLoaded = areAdvertsLoaded(getState());
    if (areLoaded) return;
    try {
      dispatch(advertsLoadedRequest());
      const adverts = await api.adverts.getAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
      throw error;
    }
  };
};

/////////// ADVERT

export const advertLoadedRequest = () => ({
  type: ADVERT_LOADED_REQUEST,
});

export const advertLoadedSuccess = (adverts) => ({
  type: ADVERT_LOADED_SUCCESS,
  payload: adverts,
});

export const advertLoadedFailure = (error) => ({
  type: ADVERT_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const advertLoad = (id) => {
  return async function (dispatch, getState, { api }) {
    const isLoaded = getAdvertByIdRedux(id)(getState());
    if (isLoaded) return;
    try {
      dispatch(advertLoadedRequest());
      const advert = await api.adverts.getAdvertById(id);
      dispatch(advertLoadedSuccess(advert));
    } catch (error) {
      dispatch(advertLoadedFailure(error));
      throw error;
    }
  };
};

//////////// UI

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
