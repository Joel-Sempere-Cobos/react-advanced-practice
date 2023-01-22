import { getAdvertByIdRedux } from './selectors.js';

describe('getAdvertByIdRedux', () => {
  test('should return an advert by advert.id', () => {
    const id = 1;
    const adverts = [{ id: 1 }];
    const state = { adverts: { data: adverts } };

    expect(getAdvertByIdRedux(id)(state)).toMatchObject(adverts[0]);
  });

  test('should not return any advert', () => {
    const id = 2;
    const adverts = [{ id: 1 }];
    const state = { adverts: { data: adverts } };

    expect(getAdvertByIdRedux(id)(state)).toBeUndefined();
  });
});
