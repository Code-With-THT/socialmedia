import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { PRIMARY } from '../utils/colors';

type Props = {
  child: JSX.Element;
  onPress: () => void;
  buttonStyles?: ViewStyle;
};

export const ContinueButton = (props: Props) => {
  const { child, onPress, buttonStyles = {} } = props;

  const localButtonStyles: ViewStyle = {
    ...styles.container,
    ...buttonStyles,
  };

  return (
    <TouchableOpacity onPress={onPress} style={localButtonStyles}>
      {child}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
