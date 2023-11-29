import firestore from '@react-native-firebase/firestore';

export const createDocumentWithId = async (
  path: string,
  documentId: string,
  data: object,
) => {
  return await firestore()
    .collection(path)
    .doc(documentId)
    .set(data)
    .then(() => {
      return { error: undefined };
    })
    .catch((error) => {
      return { error };
    });
};
