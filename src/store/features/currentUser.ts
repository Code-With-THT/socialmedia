import { createSlice } from '@reduxjs/toolkit';
import {User} from '../../model/user';

type CurrentUserInitialState = User;

const initialState: CurrentUserInitialState = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  bio: ''
}

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload
    },
  },
});

export const CurrentUserActions = currentUser.actions;

export default currentUser.reducer;