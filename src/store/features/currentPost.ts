import { createSlice } from '@reduxjs/toolkit'
import {Post} from '../../model/post'

type CurrentPostInitialState = Post;

const initialState: CurrentPostInitialState = {
  id: '',
  text: '',
  user: '',
  createdDate: Date.now(),
}

const currentPost = createSlice({
  name: 'currentPost',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      return action.payload
    },
  },
});

export const CurrentPostActions = currentPost.actions;

export default currentPost.reducer;