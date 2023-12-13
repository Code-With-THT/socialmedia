import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MessageThread } from '../../model/messageThread';

type MessageThreadsInitialState = {
  [key: string]: MessageThread;
};

const initialState: MessageThreadsInitialState = {};

const messageThreads = createSlice({
  name: 'messageThreads',
  initialState,
  reducers: {
    addMessageThreads: (state, action: PayloadAction<MessageThread[]>) => {
      action.payload.map((messageThread) => {
        state[messageThread.id] = messageThread;
      });
    },
  },
});

export const MessageThreadsActions = messageThreads.actions;

export default messageThreads.reducer;
