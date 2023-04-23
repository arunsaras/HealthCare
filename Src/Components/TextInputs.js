import {StyleSheet, TextInput} from 'react-native';

export default function TextInputs({
  placeholder,
  secureTextEntry,
  onFocus,
  value,
  editable,
  onChangeText,
  onBlur
}) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      editable={editable}
      onFocus={onFocus}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholderTextColor={'#c1e1c5'}
      style={styles.inputBox}
    />
  );
}
const styles = StyleSheet.create({
  inputBox: {
    height: 55,
    width: '100%',
    borderWidth: 1,
    borderColor: '#c1e1c5',
    borderRadius: 6,
    fontSize: 20,
    paddingHorizontal: 20,
    color: '#008b02',
  },
});
