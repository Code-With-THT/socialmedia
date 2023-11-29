import { AppThunk } from '..';
import {
  FIREBASE_COLLECTIONS,
  generateFirebaseId,
} from '../../api/firestore/utils';
import { Post } from '../../model/post';
import { createPostDocument } from '../../services/post';
import { PostsActions } from '../features/posts';

export const createPostThunk = (): AppThunk<void> => {
  return async (dispatch, state) => {
    const user = state().user;

    try {
      const newPost: Post = {
        id: generateFirebaseId(FIREBASE_COLLECTIONS.POST),
        user: user.id,
        text: 'This is a test post',
        createdDate: Date.now(),
      };

      await createPostDocument(newPost);
      dispatch(PostsActions.addPosts([newPost]));
    } catch (error) {
      console.log(error);
    }
  };
};
