import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

export const login = createAction('loginedUser/login');

const loginedUser = createReducer(
  {
    id: 12,
    email: 'front@test.com',
    username: '장사원',
    profile: 'https://lupinbucket.s3.ap-northeast-2.amazonaws.com/person.png',
    role: 'ROLE_USER',
    remainDays: 15,
    hireDate: '2022-05-01'
  },
  {
    [login]: (state: ILoginedUser, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
);

export default loginedUser;
