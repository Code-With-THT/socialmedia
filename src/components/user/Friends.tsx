import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Spacing } from "../Spacing";

type Props = {
  isActive: boolean;
};

export const Friends = (props: Props) => {
  const { isActive } = props;

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
      {/* {POSTS.map(post => <PostCard post={post} key={post.id} />)} */}

      <Spacing vertical={100} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: "center",
  },
});
