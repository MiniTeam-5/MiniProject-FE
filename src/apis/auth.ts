import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave/all');
  return response.data;
};
