import React from 'react';
import { TextInput, TextInputProps, StyleSheet, ViewStyle } from 'react-native';

import { BORDER_LIGHT_GREY } from '../utils/colors';

type Props = TextInputProps & {
  value: string;
  onChangeText: (value: string) => void;
  customStyles?: ViewStyle;
};

export const AppInput = (props: Props) => {
  const {
    value,
    onChangeText,
    customStyles = {},
    autoCorrect,
    autoCapitalize,
    secureTextEntry,
  } = props;

  const inputStyles: ViewStyle = {
    ...styles.input,
    ...customStyles,
  };

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={inputStyles}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BORDER_LIGHT_GREY,
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
  },
});
