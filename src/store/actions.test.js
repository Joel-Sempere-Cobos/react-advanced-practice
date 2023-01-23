import {
  advertsLoadedFailure,
  advertsLoadedSuccess,
  authLogin,
  authLoginFailure,
  authLoginRequest,
  authLoginSuccess,
} from './actions.js';
import { ADVERTS_LOADED_FAILURE, ADVERTS_LOADED_SUCCESS } from './types.js';

describe('advertsLoadedSuccess', () => {
  test('should return a "ADVERTS_LOADED_SUCCESS" action', () => {
    const adverts = 'adverts';
    const expectedAction = {
      type: ADVERTS_LOADED_SUCCESS,
      payload: adverts,
    };
    const action = advertsLoadedSuccess(adverts);

    expect(action).toEqual(expectedAction);
  });
});

describe('advertsLoadedFailure', () => {
  test('should return a "ADVERTS_LOADED_FAILURE" action', () => {
    const error = 'error';
    const expectedAction = {
      type: ADVERTS_LOADED_FAILURE,
      payload: error,
      error: true,
    };
    const action = advertsLoadedFailure(error);

    expect(action).toEqual(expectedAction);
  });
});

describe('authLogin', () => {
  const credentials = 'credentials';
  const remembreMe = false;
  const action = authLogin(credentials, remembreMe);
  const dispatch = jest.fn();
  const api = { auth: {} };

  describe('When login api resolves', () => {
    test('should follow the login flow', async () => {
      api.auth.login = jest.fn().mockResolvedValue();

      await action(dispatch, undefined, { api });

      expect(dispatch).toHaveBeenNthCalledWith(1, authLoginRequest());
      expect(api.auth.login).toHaveBeenCalledWith(credentials, remembreMe);
      expect(dispatch).toHaveBeenNthCalledWith(2, authLoginSuccess());
    });
  });

  describe('When login api rejects', () => {
    const credentials = 'credentials';
    const remembreMe = false;
    const action = authLogin(credentials, remembreMe);
    const dispatch = jest.fn();
    const api = { auth: {} };
    const error = 'error';
    test('should follow the login failure flow', async () => {
      api.auth.login = jest.fn().mockRejectedValue(error);

      await expect(action(dispatch, undefined, { api })).rejects.toBe(error);
      expect(dispatch).toHaveBeenNthCalledWith(1, authLoginRequest());
      expect(dispatch).toHaveBeenNthCalledWith(2, authLoginFailure(error));
    });
  });
});
