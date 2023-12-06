import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAppSelector } from '../../store';
import { Spacing } from '../Spacing';

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
      <Text>Friends</Text>
      {friendshipsForUser.map((friendship) => {
        return (
          <View>
            <Text>{friendship.id}</Text>
          </View>
        );
      })}

      <Spacing vertical={100} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: 'center',
  },
});
