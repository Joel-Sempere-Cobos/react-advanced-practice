import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../api/client.js';
import storage from '../../utils/storage.js';

export const login = async (credentials, rememberMe) => {
  const { accessToken } = await client.post('/auth/login', credentials);
  if (rememberMe === true) {
    storage.set('Auth', accessToken);
  }
  return setAuthorizationHeader(accessToken);
};

export const logout = () => {
  removeAuthorizationHeader();
  storage.remove('Auth');
};
