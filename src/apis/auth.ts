import { ISignup } from '../interfaces/user';
import { IApplySchedule } from '../interfaces/common';
import { axiosInstance } from './instance';
import axios from 'axios';
import { useSelector } from 'react-redux';

interface ModifiedInDTO {
  email: string;
  username: string;
  newPassword?: string;
  checkPassword?: string;
  profileToDelete?: string;
}

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
  const response = await axiosInstance().get(`/auth/user/`);
  return response.data;
}

export const editUser = async (email: string, username: string, newPassword: string, checkPassword: string, profileToDelete: string, profile: File | null) => {
  const formData = new FormData();
  if (profile) {
    formData.append('profile', profile);
  }
  const modifiedInDTO : ModifiedInDTO = {
    email: email,
    username: username,
  };
  if (newPassword !== '') {
    modifiedInDTO.newPassword = newPassword;
  }
  if (checkPassword !== '') {
    modifiedInDTO.checkPassword = checkPassword;
  }
  if(profileToDelete !== '') {
    modifiedInDTO.profileToDelete = profileToDelete;
  }

  formData.append('modifiedInDTO', new Blob([JSON.stringify(modifiedInDTO)], { type: 'application/json' }));
  
  const response = await axiosInstance({multi: true}).post(`/auth/user`, formData);
  return response.data;
}
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
  console.log(email, password);
  const response = await axios.post('http://13.209.163.225:5000/login', { email, password });
  console.log(response);

  // const response = await axiosInstance().post('/login', { email, password });

  return response;
};

export const signup = async (item: ISignup) => {
  const response = await axiosInstance().post('/join', item);

  if (response.status.toString() === '400') return Error(response.data);

  return response.data;
};

export const refresh = async () => {
  const res = await axiosInstance().get('/refreshtoken');
  return res.data;
};

export const verify = async () => {
  const res = await axiosInstance().get('/auth/verify');
  return res.data;
};
export const getUserData = async () => {
  const response = await axiosInstance().get('/auth/user');
  console.log(response);
  return response;
};
export const getSearchData = async (search: string) => {
  const response = await axiosInstance().get(`/admin?query=${search}`);
  return response.data;
}
