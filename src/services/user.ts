import { createDocumentWithId } from '../api/firestore/DocumentMutator';
import {
  WhereCriteria,
  getAllDocumentsWithPath,
  getDocumentsWithCriteria,
} from '../api/firestore/DocumentRetriever';
import { FIREBASE_COLLECTIONS } from '../api/firestore/utils';
import { User } from '../model/user';

export const createUserDocument = async (user: User) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.USER,
    user.id,
    user,
  );

  if (resp.error) {
    throw resp.error;
  }
};

export const getUserDocumentWithEmail = async (email: string) => {
  const criteria: WhereCriteria = {
    field: 'email',
    operation: '==',
    criteria: email,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.USER,
    criteria,
  );

  if (resp.error) {
    throw resp.error;
  }

  return (resp.data as User[])[0];
};

export const getAllUsers = async () => {
  const resp = await getAllDocumentsWithPath(FIREBASE_COLLECTIONS.USER);

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as User[];
};
