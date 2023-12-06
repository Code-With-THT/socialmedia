import { AppThunk } from '..';
import {
  FIREBASE_COLLECTIONS,
  generateFirebaseId,
} from '../../api/firestore/utils';
import { FRIENDSHIP_STATUS, Friendship } from '../../model/friendship';
import {
  createFriendshipDocument,
  getFriendshipsForUser,
} from '../../services/friendship';
import { FriendshipsActions } from '../features/friendships';

export const getFrienshipsForUserThunk = (id: string): AppThunk<void> => {
  return async (dispatch) => {
    try {
      const friendships = await getFriendshipsForUser(id);
      console.log('friendships from thunk', friendships);
      dispatch(FriendshipsActions.addFriendships(friendships));
    } catch (error) {
      console.log('Could not retrieve Friendships for the user', id, error);
    }
  };
};

export const createFrienshipThunk = (
  otherUserId: string,
  onSuccess: () => void,
  onError: () => void,
): AppThunk<void> => {
  return async (dispatch, state) => {
    const { user } = state();

    try {
      const newFriendship: Friendship = {
        id: generateFirebaseId(FIREBASE_COLLECTIONS.FRIENDSHIP),
        users: [user.id, otherUserId],
        requester: user.id,
        status: FRIENDSHIP_STATUS.PENDING,

        createdDate: Date.now(),
        /**
         * TO DO: How to format dates in Expo
         */
        createdDateString: '',
      };

      createFriendshipDocument(newFriendship);
      dispatch(FriendshipsActions.addFriendships([newFriendship]));

      onSuccess();
    } catch (error) {
      console.log('Could not retrieve Friendships for the user', error);

      onError();
    }
  };
};
