import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = (option?: { multi?: boolean }) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    //baseURL: '/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3RzdHVkeSIsInJvbGUiOiJST0xFX01BU1RFUiIsImlkIjo2LCJleHAiOjE2ODQwNTI2MDJ9.F3xMT3oa76QIediCd1LQek9tiG3yqD6k7wkyUSWr8xA35wlxipddgyC5pcIrAHIOh36u0QkXbBP11c9Zy0LmjQ'
    },
    withCredentials: true
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 3000;
  //요청보낼 때 쿠키에있는 엑세스토큰을 가져와서 헤더에 셋
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie('accessToken');
      if (token) request.headers['Authorization'] = `Bearer ${token}`;
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
