import { ISignup, ModifiedInDTO, UserData } from '../interfaces/user';
import { IApplySchedule } from '../interfaces/common';
import { axiosInstance } from './instance';
import { AxiosResponse } from 'axios';

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave/all');
  return response.data;
};

export const changeRole = async (id: number, role: string) => {
  const response = await axiosInstance().post(`/master/${id}`, { role });
  return response.data;
};

export const resignUser = async (id: number) => {
  const response = await axiosInstance().post(`/admin/resign/${id}`);
  return response.data;
};

export const getUsers = async (url: string) => {
  const response = await axiosInstance().get(`/admin${url}`);
  return response.data;
};

export const changeAnnual = async (id: number, remainDays: number) => {
  const response = await axiosInstance().post(`/admin/annual/${id}`, { remainDays });
  return response.data;
};

export const getUser = async () => {
  const response = await axiosInstance().get('/auth/user/');
  return response.data;
};

export const editUser = async (userData: UserData) => {
  const { email, username, newPassword, checkPassword, profileToDelete, profile } = userData;
  const formData = new FormData();
  if (profile) {
    formData.append('profile', profile);
  }
  const modifiedInDTO: ModifiedInDTO = {
    email: email,
    username: username
  };
  if (newPassword !== '') {
    modifiedInDTO.newPassword = newPassword;
  }
  if (checkPassword !== '') {
    modifiedInDTO.checkPassword = checkPassword;
  }
  if (profileToDelete !== '') {
    modifiedInDTO.profileToDelete = profileToDelete;
  }

  formData.append('modifiedInDTO', new Blob([JSON.stringify(modifiedInDTO)], { type: 'application/json' }));

  const response = await axiosInstance({ multi: true }).post(`/auth/user`, formData);
  return response.data;
};
export const getSchedule = async (userId: number) => {
  const response = await axiosInstance().get(`/auth/leave/id/${userId}`);
  return response.data;
};

export const deleteApplication = async (id: number) => {
  const response = await axiosInstance().post(`/auth/leave/${id}/delete`);
  return response.data;
};

export const applySchedule = async (data: IApplySchedule) => {
  try {
    const response = await axiosInstance().post('/auth/leave/apply', data);
    return response;
  } catch (error: any) {
    console.log(error);
    const errorText = error.response.data?.data?.value;
    if (errorText) throw new Error(errorText);
  }
};

export const getAlarms = async () => {
  const response = await axiosInstance().get('/auth/alarm');
  return response.data;
};
export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axiosInstance().post('/login', { email, password });

  return response;
};

export const signup = async (item: ISignup) => {
  const response = await axiosInstance().post('/join', item);
  return response.data;
};

export const refresh = async (): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance({ refresh: true }).post('/refreshtoken');
    return response;
  } catch (err: any) {
    throw new Error(err.response.data);
  }
};

export const getUserData = async () => {
  const response = await axiosInstance().get('/auth/user');
  return response;
};

export const getSearchData = async (search: string) => {
  const response = await axiosInstance().get(`/admin?query=${search}`);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance({ refresh: true }).post('/auth/logout');
  return response;
};
