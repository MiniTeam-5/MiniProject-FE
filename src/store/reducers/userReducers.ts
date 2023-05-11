import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

export const login = createAction('loginedUser/login');

const loginedUser = createReducer(
  {},
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
