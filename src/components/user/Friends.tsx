import React, { useMemo } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { FRIENDSHIP_STATUS, Friendship } from '../../model/friendship';
import { useAppDispatch, useAppSelector } from '../../store';
import { acceptFrienshipThunk } from '../../store/thunks/friendships-thunk';
import { CARD_SHADOW } from '../../utils/styles';
import { Spacing } from '../Spacing';

const CHECK_URL = Image.resolveAssetSource(
  require('../../../assets/check.png'),
).uri;
const CLOSE_URL = Image.resolveAssetSource(
  require('../../../assets/close.png'),
).uri;

type Props = {
  isActive: boolean;
};

export const Friends = (props: Props) => {
  const { isActive } = props;

  const user = useAppSelector((state) => state.user);
  const friendships = useAppSelector((state) => state.friendships);

  const friendshipsForUser = useMemo(() => {
    return Object.values(friendships).filter((a) => a.users.includes(user.id));
  }, [friendships]);

  if (!isActive) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}
    >
      {friendshipsForUser.map((friendship) => {
        return <FriendshipRow friendship={friendship} key={friendship.id} />;
      })}

      <Spacing vertical={100} />
    </ScrollView>
  );
};

type FriendshipRowProps = {
  friendship: Friendship;
};

const FriendshipRow = (props: FriendshipRowProps) => {
  const { friendship } = props;
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users);
  const currentUser = useAppSelector((state) => state.user);

  const isRequester = useMemo(
    () => friendship.requester === currentUser.id,
    [friendship.requester, currentUser.id],
  );

  const otherUserId = useMemo(() => {
    return friendship.users.find((a) => a !== currentUser.id)!;
  }, []);

  const otherUser = useMemo(() => {
    return users[otherUserId];
  }, []);

  const onAccept = () => {
    const onSuccess = () => {};
    const onError = () => {};

    dispatch(acceptFrienshipThunk(friendship, onSuccess, onError));
  };
  const onReject = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.photo} />
      </View>

      <View style={styles.content}>
        <Text>
          {otherUser?.name} @{otherUser?.username}
        </Text>
        <Text>{otherUser?.bio}</Text>
      </View>

      {!isRequester && friendship.status === FRIENDSHIP_STATUS.PENDING && (
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={[styles.iconContainer, styles.checkIconContainer]}
            onPress={onAccept}
          >
            <Image source={{ uri: CHECK_URL }} style={styles.checkIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconContainer, styles.closeIconContainer]}
            onPress={onReject}
          >
            <Image source={{ uri: CLOSE_URL }} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      )}

      {isRequester && friendship.status === FRIENDSHIP_STATUS.PENDING && (
        <View style={styles.actionContainer}>
          <Text style={styles.pendingMessage}>Pending...</Text>
        </View>
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: 'center',
  },
  container: {
    height: 60,
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    ...CARD_SHADOW,
  },
  photoContainer: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  content: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '22%',
    alignItems: 'center',
  },
  pendingMessage: {
    fontStyle: 'italic',
  },
  iconContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIconContainer: {
    backgroundColor: 'green',
  },
  closeIconContainer: {
    backgroundColor: 'red',
  },
  checkIcon: {
    height: 20,
    width: 20,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
});
