import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from '../../model/user';

type UserInitialState = User;

const initialState: UserInitialState = {
  id: '',
  name: '',
  email: '',
  username: '',
  bio: '',
};

/**
 * The app User
 */
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
  },
});

export const UserActions = user.actions;

export default user.reducer;
