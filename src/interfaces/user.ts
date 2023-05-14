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
  check_password: string;
  username: string;
  hireDate: string;
}

export interface User {
  role: keyof typeof USER_TYPES;
}
