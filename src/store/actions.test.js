import { advertsLoadedFailure, advertsLoadedSuccess } from './actions.js';
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
