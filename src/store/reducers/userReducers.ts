import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

export const userLogin = createAction<ILoginedUser>('loginedUser/login');
export const setRemainDays = createAction<number>('loginedUser/setRemainDays');
const loginedUser = createReducer(
  {
    id: '',
    email: '',
    username: '',
    profile: '',
    role: '',
    remainDays: 0,
    hireDate: ''
  },
  {
    // @ts-ignore
    [userLogin]: (state: ILoginedUser, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    // @ts-ignore
    [setRemainDays]: (state: ILoginedUser, action) => {
      return {
        ...state,
        remainDays: state.remainDays - action.payload
      };
    }
  }
);

export default loginedUser;
