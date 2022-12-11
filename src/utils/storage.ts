import { CookieStorage } from 'cookie-storage';

const cookieStorage = new CookieStorage({
  path: '/',
});

export const storageFields = {
  ACCESS_JWT_TOKEN: 'access-token',
  REFRESH_JWT_TOKEN: 'refresh-token',
};

export default function getStorage() {
  if (cookieStorage) {
    return cookieStorage;
  }

  return new CookieStorage({
    path: '/',
  });
}
