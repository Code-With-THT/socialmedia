import auth from '@react-native-firebase/auth';

import { AppThunk } from '..';
import {
  FIREBASE_COLLECTIONS,
  generateFirebaseId,
} from '../../api/firestore/utils';
import {
  createUserDocument,
  getUserDocumentWithEmail,
} from '../../services/user';
import { UserActions } from '../features/user';
import { UsersActions } from '../features/users';

type CreateUserAccountThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const createUserAccountThunk = (
  props: CreateUserAccountThunkProps,
): AppThunk<void> => {
  const { password, onSuccess, onError } = props;

  return async (_, state) => {
    try {
      const newUser = Object.assign({}, state().user);

      newUser.id = generateFirebaseId(FIREBASE_COLLECTIONS.USER);
      newUser.createdDate = Date.now();

      await auth().createUserWithEmailAndPassword(newUser.email, password);

      await createUserDocument(newUser);

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

type LogInUserThunkProps = {
  email: string;
  onSuccess: () => void;
  onError: () => void;
};

export const logInUserThunk = (props: LogInUserThunkProps): AppThunk<void> => {
  const { email, onSuccess, onError } = props;

  return async (dispatch) => {
    try {
      const user = await getUserDocumentWithEmail(email);

      dispatch(UserActions.setUser(user));
      dispatch(UsersActions.addUsers([user]));

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};
