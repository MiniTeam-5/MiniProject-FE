import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getToken = () => {
  return cookies.get('accessToken');
};

export const setToken = (token: string, option: CookieSetOptions) => {
  return cookies.set('accessToken', token, option);
};

export const removeToken = () => {
  return cookies.remove('accessToken');
};
