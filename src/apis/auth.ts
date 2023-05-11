import { IApplySchedule } from '../interfaces/common';
import { axiosInstance } from './instance';

export const getSchedules = async (date: string) => {
  const response = await axiosInstance().get(`/auth/leave/month/${date}`);
  return response.data;
};

export const applySchedule = async (data: IApplySchedule) => {
  const response = await axiosInstance().post('/auth/leave/apply', data);
  return response.data;
};
