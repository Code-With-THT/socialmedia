import {
  createDocumentWithId,
  updateDocument,
} from '../api/firestore/DocumentMutator';
import {
  WhereCriteria,
  getDocumentsWithCriteria,
} from '../api/firestore/DocumentRetriever';
import { FIREBASE_COLLECTIONS } from '../api/firestore/utils';
import { Friendship } from '../model/friendship';

export const createFriendshipDocument = async (friendship: Friendship) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.FRIENDSHIP,
    friendship.id,
    friendship,
  );

  if (resp.error) {
    throw resp.error;
  }
};

export const updateFriendshipDocument = async (friendship: Friendship) => {
  await updateDocument(
    FIREBASE_COLLECTIONS.FRIENDSHIP,
    friendship.id,
    friendship,
  );
};

export const getFriendshipsForUser = async (user: string) => {
  console.log('user', user);
  const criteria: WhereCriteria = {
    field: 'users',
    operation: 'array-contains',
    criteria: user,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.FRIENDSHIP,
    criteria,
  );

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as Friendship[];
};
