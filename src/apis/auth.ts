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

export const deleteApplication = async (id) => {
  const response = await axiosInstance().post(`/auth/leave/${id}/delete`);
  return response.data;
};

export const applySchedule = async (data: IApplySchedule) => {
  const response = await axiosInstance().post('/auth/leave/apply', data);
  return response.data;
};
