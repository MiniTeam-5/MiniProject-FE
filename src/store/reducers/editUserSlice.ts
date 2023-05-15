import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  profile: ''
};

const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ profile: string }>) => {
      state.profile = action.payload.profile;
    }
  }
});

export const { updateProfile } = editUserSlice.actions;
export default editUserSlice.reducer;
