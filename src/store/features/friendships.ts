import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Friendship } from '../../model/friendship';

type FriendshipsInitialState = {
  [key: string]: Friendship;
};

const initialState: FriendshipsInitialState = {};

const friendships = createSlice({
  name: 'friendships',
  initialState,
  reducers: {
    addFriendships: (state, action: PayloadAction<Friendship[]>) => {
      action.payload.map((friendship) => {
        state[friendship.id] = friendship;
      });
    },
  },
});

export const FriendshipsActions = friendships.actions;

export default friendships.reducer;
