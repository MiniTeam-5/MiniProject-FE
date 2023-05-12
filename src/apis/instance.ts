import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = (option?: { multi?: boolean }) => {
  const config: AxiosRequestConfig = {
    // baseURL: '/',
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 3000;
  //요청보낼 때 쿠키에있는 엑세스토큰을 가져와서 헤더에 셋
  instance.interceptors.request.use(
    (request) => {
      // const token = getCookie('accessToken');
      // if (token)
      request.headers[
        'Authorization'
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3RzdHVkeSIsInJvbGUiOiJST0xFX01BU1RFUiIsImlkIjo1LCJleHAiOjE2ODM5MjA4OTl9.1Sb2qjHg7yBf43po4FO1aFFL0Cjt55_S5lNoDP5FkGRkW8d4RQvLc9tHXUuIjbCUVeFjX-hZc-yZfezHFLzQpg`;
      if (option && option.multi) request.headers['Content-Type'] = 'multipart/form-data';
      return request;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return instance;
};

export const axiosInstance = getAxiosInstance;
