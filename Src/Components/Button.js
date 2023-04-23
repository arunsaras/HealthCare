import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Button = ({ButtonText,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonBox}>
      <Text style={styles.buttonText}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonBox: {
    height: 45,
    padding: 10,
    backgroundColor: '#008b02',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
