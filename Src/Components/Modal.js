import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TextInputs from './TextInputs';
import {Button} from './Button';

const Modals = ({
  onPressClose,
  onPressAddpat,
  name,
  dob,
  gender,
  setName,
  setDob,
  setGender,
}) => {
  return (
    <View style={Styles.container}>
      <View style={[Styles.subcontainer, {alignItems: 'flex-end'}]}>
        <TouchableOpacity onPress={onPressClose}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../Assets/Image/close.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.subcontainer}>
        <TextInputs placeholder={'Name'} value={name} onChangeText={setName} />
      </View>
      <View style={Styles.subcontainer}>
        <TextInputs placeholder={'DOB'} value={dob} onChangeText={setDob} />
      </View>
      <View style={Styles.subcontainer}>
        <TextInputs
          placeholder={'Gender'}
          value={gender}
          onChangeText={setGender}
        />
      </View>
      <View style={Styles.subcontainer}>
        <Button onPress={onPressAddpat} ButtonText={'Add Patient'} />
      </View>
    </View>
  );
};
export default Modals;
const Styles = StyleSheet.create({
  subcontainer: {
    paddingTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 6,
  },
});
