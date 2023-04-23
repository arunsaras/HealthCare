import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Texts = ({Children, style}) => {
  return <Text style={[styles.text, style]}>{Children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: '#008b02',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
