import { createSlice } from '@reduxjs/toolkit';
import { IRememberEmail } from '../../interfaces/rememberEmail';

const initialState: IRememberEmail = {
  checked: false,
  email: ''
};
const rememberEmail = createSlice({
  name: 'rememberEmail',
  initialState,
  reducers: {
    setRemember: (state, action) => {
      console.log(action);
      state.email = action.payload.email;
      state.checked = action.payload.checked;
    }
  }
});

export const { setRemember } = rememberEmail.actions;

export default rememberEmail.reducer;
