import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave');
  return response.data;
};

export const getSchedule = async () => {
  const response = await axiosInstance().get('/auth/leave?id=2');
  return response.data;
};
