import React from "react";
import { View } from "react-native";

type Props = {
  vertical?: number;
  horizontal?: number;
};

export const Spacing = (props: Props) => {
  const { vertical = 0, horizontal = 0 } = props;

  return (
    <View style={{ marginVertical: vertical, marginHorizontal: horizontal }} />
  );
};
