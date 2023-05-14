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
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    }
  }
});

export const { setChecked, setEmail } = rememberEmail.actions;

export default rememberEmail.reducer;
