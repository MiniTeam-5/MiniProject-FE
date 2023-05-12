import { ISignup } from '../interfaces/user';
import { IApplySchedule } from '../interfaces/common';
import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave/all');
  return response.data;
};

export const getSchedule = async () => {
  const response = await axiosInstance().get('/auth/leave/id/1');
  return response.data;
};

export const deleteApplication = async (id: number) => {
  const response = await axiosInstance().post(`/auth/leave/${id}/delete`);
  return response.data;
};

export const applySchedule = async (data: IApplySchedule) => {
  const response = await axiosInstance().post('/auth/leave/apply', data);
  return response.data;
};

export const getAlarms = async () => {
  const response = await axiosInstance().get('/auth/alarm');
  return response.data;
};
export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axiosInstance().post('/login', { email, password });

  // if (response.status.toString() === '400' || response.status.toString() === '401') return Error(response.data);

  return response;
};

export const signup = async (item: ISignup) => {
  const response = await axiosInstance().post('/join', item);

  if (response.status.toString() === '400') return Error(response.data);

  return response.data;
};
