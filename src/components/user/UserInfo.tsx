import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { User } from "../../model/user";

type Props = {
  user: User;
};

export const UserInfo = (props: Props) => {
  const { user } = props;

  return (
    <View style={styles.topInfo}>
      {/* Photo Column */}
      <View style={styles.imageColumn}>
        <View style={styles.photo} />
      </View>

      {/* User Info Column */}
      <View style={styles.userInfoColumn}>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topInfo: {
    height: 100,
    flexDirection: "row",
  },
  imageColumn: {
    height: "100%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoColumn: {
    height: "100%",
    width: "75%",
    justifyContent: "center",
  },
  photo: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  username: {
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "italic",
  },
  bio: {
    fontSize: 13,
    fontWeight: "300",
    marginTop: 5,
  },
});
