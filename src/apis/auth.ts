import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave/month/2023-06');
  return response.data;
};

export const getSchedule = async () => {
  const response = await axiosInstance().get('/auth/leave?id=2');
  return response.data;
};

export const deleteApplication = async () => {
  const response = await axiosInstance().post('/auth/leave/3/delete');
  return response.data;
};
