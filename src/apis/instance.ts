import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    baseURL: '/',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const instance = axios.create(config);
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie('accessToken');
      if (token) request.headers['Authorization'] = 'Bearer' + token;
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = getAxiosInstance;
