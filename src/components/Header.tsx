import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

type HeaderButton = {
  child?: JSX.Element;
  onPress: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
  showLogo?: boolean;
};

export const Header = (props: Props) => {
  const { leftButton, rightButton, showLogo = false } = props;

  const leftButtonPress = () => {
    leftButton?.onPress();
  };

  const rightButtonPress = () => {
    rightButton?.onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftButtonContainer}
        onPress={leftButtonPress}
      >
        {leftButton?.child ||
          (leftButton?.onPress && (
            <Image
              source={require("../../assets/back.png")}
              style={styles.backImage}
            />
          )) ||
          null}
      </TouchableOpacity>

      <View>{showLogo ? <View style={styles.logo} /> : null}</View>

      <TouchableOpacity
        style={styles.rightButtonContainer}
        onPress={rightButtonPress}
      >
        {rightButton?.child || null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  leftButtonContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  rightButtonContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backImage: {
    height: 20,
    width: 20,
  },
});
