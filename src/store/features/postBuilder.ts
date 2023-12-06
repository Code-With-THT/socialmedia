import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PostBuilderInitialState = {
  isPostModalOpen: boolean;
};

const initialState: PostBuilderInitialState = {
  isPostModalOpen: false,
};

const postBuilder = createSlice({
  name: 'postBuilder',
  initialState,
  reducers: {
    setPostBuilder: (state, action) => {
      return action.payload;
    },
    setIsPostModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPostModalOpen = action.payload;
    },
    reset: () => initialState,
  },
});

export const PostBuilderActions = postBuilder.actions;

export default postBuilder.reducer;
