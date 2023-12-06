import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const generateFirebaseId = (path: string) => {
  const firRef = firestore().collection(path).doc();

  return firRef.id;
};

export enum FIREBASE_COLLECTIONS {
  USER = 'user',
  POST = 'post',
  FRIENDSHIP = 'friendship',
}

export const getDocumentsFromQuerySnapshot = (
  querySnapshot: FirebaseFirestoreTypes.QuerySnapshot,
) => {
  const documents: any = [];
  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};
