import { createDocumentWithId } from '../api/firestore/DocumentMutator';
import {
  WhereCriteria,
  getAllDocumentsWithPath,
  getDocumentsWithCriteria,
} from '../api/firestore/DocumentRetriever';
import { FIREBASE_COLLECTIONS } from '../api/firestore/utils';
import { Post } from '../model/post';

export const createPostDocument = async (post: Post) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.POST,
    post.id,
    post,
  );

  if (resp.error) {
    throw resp.error;
  }
};

/**
 * Given a `User.id`, retrieve all of the posts that the User has created.
 * @returns List of `Post`
 */
export const getPostsForUser = async (user: string) => {
  const criteria: WhereCriteria = {
    field: 'user',
    operation: '==',
    criteria: user,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.POST,
    criteria,
  );

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as Post[];
};

export const getAllPosts = async () => {
  const resp = await getAllDocumentsWithPath(FIREBASE_COLLECTIONS.POST);

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as Post[];
};
