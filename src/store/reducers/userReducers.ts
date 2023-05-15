import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

// const initialState = {
//       id: '',
//       email: '',
//       username: '',
//       profile: '',
//       role: '',
//       remainDays: 0,
//       hireDate: ''
// }

// const loginedUser = createSlice({
//   name: 'loginedUser',
//   initialState,
//   reducers:{
//     setUserLogin: (state, action) => {
//       state = action.payload;
//     }
//   }
// })

// export const {setUserLogin} = loginedUser.actions;

// export default loginedUser.reducer;

export const userLogin = createAction('loginedUser/login');

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
    }
  }
);

export default loginedUser;
