import { axiosInstance } from './instance';

interface ModifiedInDTO {
  email: string;
  username: string;
  newPassword?: string;
  checkPassword?: string;
  profileToDelete?: string;
}

export const getSchedules = async () => {
  const response = await axiosInstance().get('/auth/leave');
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

export const changeAnnual = async (id: number, remain_days: number) => {
  const response = await axiosInstance().post(`/admin/annual/${id}`, { remain_days });
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