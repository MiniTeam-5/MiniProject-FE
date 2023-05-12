import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

export const login = createAction('loginedUser/login');

const loginedUser = createReducer(
  {
    id: 8,
    username: '김테슽',
    email: 'user@example.com',
    role: 'USER',
    profile: 'https://lupinbucket.s3.ap-northeast-2.amazonaws.com/person.png',
    remainDays: 2,
    hire_date: '2023-04-27'
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
