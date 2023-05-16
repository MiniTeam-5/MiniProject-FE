import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = (option?: { multi?: boolean; refresh?: boolean }) => {
  const config: AxiosRequestConfig = {
    baseURL: 'https://lupintech.co.kr/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 6000;
  //요청보낼 때 쿠키에있는 엑세스토큰을 가져와서 헤더에 셋
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie('accessToken');
      const refreshToken = getCookie('refreshToken');
      if (token) request.headers['Authorization'] = `Bearer ${token}`;
      if (option && option.multi) request.headers['Content-Type'] = 'multipart/form-data';
      if (option && option.refresh) request.headers['RefreshToken'] = `Bearer ${refreshToken}`;
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export const axiosInstance = getAxiosInstance;
