import { ISignup } from '../interfaces/user';
import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave');
  return response.data;
};

export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axiosInstance().post('/login', { email, password });
  if (response.status.toString() === '400') return Error(response.data);
  else if (response.status.toString() === '401') return Error(response.data);
  else return response;
};

export const signup = async (item: ISignup) => {
  const response = await axiosInstance().post('/join', item);

  if (response.status.toString() === '400') return Error(response.data);

  return response.data;
};
