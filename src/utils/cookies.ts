import { Cookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
  try {
    return cookies.get(name);
  } catch (error) {
    return error;
  }
};

export const setCookie = (name: string, value: Cookie, options?: CookieSetOptions) => {
  cookies.set(name, value, { ...options });
};

export const removeCookie = (name: string, options?: CookieSetOptions) => {
  cookies.remove(name, { ...options });
};
