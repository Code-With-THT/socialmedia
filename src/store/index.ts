import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import currentPost from './features/currentPost';
import currentUser from './features/currentUser';
import posts from './features/posts';
import user from './features/user';
import users from './features/users';

const store = configureStore({
  reducer: {
    /**
     * When the User visits the PostDetailPage, the currentPost slice of state is updated with the post that the User clicked on.
     */
    currentPost,
    /**
     * When the User visits the UserDetailPage, the currentUser slice of state is updated with the user that the User clicked on.
     */
    currentUser,
    /**
     * The currently logged in user is stored in the user slice of state.
     */
    user,
    /**
     * As the User comes across posts in the app, they are stored in the posts dump/slice of state.
     */
    posts,
    /**
     * As the currently logged in User comes across other Users, we will store their documents inside of this `users` slice
     */
    users,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Used throughout the app to write to redux
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Used throughout the app to read from redux
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<R> = ThunkAction<R, RootState, unknown, Action<any>>;
