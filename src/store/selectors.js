export const getIsLogged = (state) => state.auth;

export const getAdvertsRedux = (state) => state.adverts;

export const getAdvertByIdRedux = (id) => (state) =>
  getAdvertsRedux(state).find((advert) => advert.id === id);

export const getUi = (state) => state.ui;
