import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../model/user";

type UserInitialState = User;

const initialState: UserInitialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  bio: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
  },
});

export const UserActions = user.actions;

export default user.reducer;
