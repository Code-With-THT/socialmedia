import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Post } from '../../model/post';

type CurrentPostInitialState = Post;

const initialState: CurrentPostInitialState = {
  id: '',
  text: '',
  user: '',
  createdDate: Date.now(),
};

const currentPost = createSlice({
  name: 'currentPost',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      return action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    reset: () => initialState,
  },
});

export const CurrentPostActions = currentPost.actions;

export default currentPost.reducer;
