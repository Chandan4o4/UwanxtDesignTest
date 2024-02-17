import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function CustomButton({
  onPress,
  title,
  buttonStyle,
  textStyle,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 100,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
