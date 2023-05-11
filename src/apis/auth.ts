import { axiosInstance } from './instance';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave');
  return response.data;
};


export const changeRole = async (id: number, role: string) => {
  const response = await axiosInstance().post(`/auth/admin/${id}`, { role });
  return response.data;
};

export const getUsers = async () => {
  const response = await axiosInstance().get('/auth/admin');
  return response.data;
};

export const changeAnnual = async (id: number, remain_days: number) => {
  const response = await axiosInstance().post(`/auth/admin/annual/${id}`, { remain_days });
  return response.data;
};

export const getUser = async () => {
  const response = await axiosInstance().get(`/auth/user/`);
  return response.data;
}

export const editUser = async (password: string, profile: string) => {
  const response = await axiosInstance().post(`/auth/user`, { password, profile });
  return response.data;
}