import { RootState } from '../store';
import { USER_TYPES } from '../constants/navbarConstants';

export interface IUser {
  status: string;
  msg: string;
  data: {
    id: number;
    role: string;
  };
}

export interface ISignup {
  email: string;
  password: string;
  checkPassword: string;
  username: string;
  hireDate: string;
}

export interface ModifiedInDTO {
  email: string;
  username: string;
  newPassword?: string;
  checkPassword?: string;
  profileToDelete?: string;
}

export interface UserData {
  email: string;
  username: string;
  newPassword?: string;
  checkPassword?: string;
  profileToDelete?: string;
  profile?: File | null;
}

export interface UserList {
  id: number;
  username: string;
  email: string;
  role: string;
  profile: string;
  hireDate: string;
  remainDays: number;
  isEditing: boolean;
}

export interface Login{
  email: string;
  password: string;
}

export interface AdminUserListProps {
  index: number;
  users: UserList[];
  user: UserList;
  loginUser: RootState['loginedUser'];
  handleAdminClick: (userId: number) => void;
  handleSaveClick: (userId: number) => void;
  handleRoleChange: (event: React.ChangeEvent<HTMLSelectElement>, userId: number) => void;
  handlePlusMinusClick: (userId: number, isPlus: boolean) => void;
  handleDeleteClick: (userId: number) => void;
  openDeleteModal: (userId: number) => void;
}

export interface User {
  role: keyof typeof USER_TYPES;
}
