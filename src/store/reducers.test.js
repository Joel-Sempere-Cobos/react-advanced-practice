import {
  advertCreatedSuccess,
  advertDeletedSuccess,
  advertLoadedSuccess,
  advertsLoadedSuccess,
  apiTagsLoadedSuccess,
  authLoginSuccess,
  authLogoutSuccess,
} from './actions.js';
import { auth, adverts, defaultState } from './reducers.js';

describe('auth', () => {
  const state = defaultState.auth;

  test('should return "true" when receive "AUTH_LOGIN_SUCCESS"', () => {
    const action = authLoginSuccess();
    const result = auth(state, action);
    expect(result).toBe(true);
  });

  test('should return "false" when receive "AUTH_LOGOUT_SUCCESS"', () => {
    const action = authLogoutSuccess();
    const result = auth(state, action);
    expect(result).toBe(false);
  });

  test('should return the same state when receive "undefined"', () => {
    const action = { type: undefined };
    const result = auth(state, action);
    expect(result).toBe(state);
  });
});

describe('adverts', () => {
  const state = defaultState.adverts;

  test('should manage "ADVERTS_LOADED_SUCCESS"', () => {
    const payload = 'anuncios';
    const action = advertsLoadedSuccess(payload);
    const result = adverts(state, action);

    expect(result).toMatchObject({ ...state, areLoaded: true, data: action.payload });
  });

  test('should manage "ADVERT_LOADED_SUCCESS"', () => {
    const payload = 'anuncios';
    const action = advertLoadedSuccess(payload);
    const result = adverts(state, action);

    expect(result).toMatchObject({ ...state, data: [action.payload] });
  });

  test('should manage "ADVERT_CREATED_SUCCESS"', () => {
    const payload = 'anuncios';
    const action = advertCreatedSuccess(payload);
    const result = adverts(state, action);

    expect(result).toMatchObject({ ...state, data: [...state.data, action.payload] });
  });

  test('should manage "ADVERT_DELETED_SUCCESS"', () => {
    state.data = [{ id: 0 }, { id: 1 }];
    const payload = { id: 1 };
    const action = advertDeletedSuccess(payload);
    const result = adverts(state, action);

    expect(result).toMatchObject({ ...state, data: [{ id: 0 }] });
  });

  test('should manage "API_TAGS_LOADED_SUCCESS"', () => {
    const payload = [];
    const action = apiTagsLoadedSuccess(payload);
    const result = adverts(state, action);

    expect(result).toMatchObject({ ...state, apiTags: action.payload });
  });
});
