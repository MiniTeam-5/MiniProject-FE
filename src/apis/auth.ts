import { axiosInstance } from './instance';

export const getSchedules = async (date: string) => {
  const response = await axiosInstance().get(`/auth/leave/month/${date}`);
  return response.data;
};
