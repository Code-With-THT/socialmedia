import { AppThunk } from '..';
import { getAllPosts, getPostsForUser } from '../../services/post';
import { PostsActions } from '../features/posts';

export const getAllPostsThunk = (): AppThunk<void> => {
  return async (dispatch) => {
    try {
      const posts = await getAllPosts();
      dispatch(PostsActions.addPosts(posts));
    } catch (error) {
      console.log('Could not retrieve all Posts', error);
    }
  };
};

export const getPostsForUserThunk = (id: string): AppThunk<void> => {
  return async (dispatch) => {
    try {
      const postsForUser = await getPostsForUser(id);
      dispatch(PostsActions.addPosts(postsForUser));
    } catch (error) {
      console.log('Could not retrieve posts for the user', id, error);
    }
  };
};
