import { ILoginedUser } from './store';

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
  check_password: string;
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

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  profile: string;
  hireDate: string;
  remainDays: number;
  isEditing: boolean;
}

export interface AdminUserListProps {
  index: number;
  users: User[];
  user: User;
  loginUser: ILoginedUser;
  handleAdminClick: (userId: number) => void;
  handleSaveClick: (userId: number) => void;
  handleRoleChange: (event: React.ChangeEvent<HTMLSelectElement>, userId: number) => void;
  handleMinusClick: (userId: number) => void;
  handlePlusClick: (userId: number) => void;
  handleDeleteClick: (userId: number) => void;
  openDeleteModal: (userId: number) => void;
}
