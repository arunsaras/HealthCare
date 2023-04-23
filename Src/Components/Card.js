import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Texts} from './Text';
import LinearGradient from 'react-native-linear-gradient';

export const Card = () => {
  return (
    <LinearGradient
      colors={['#194d1a', '#2d862e', '#79d27a']}
      style={Styles.container}>
      <Texts style={Styles.cardText} Children={'Dr. Girishanth'} />
      <View style={Styles.cardContainer}>
        <Texts style={Styles.cardSubText} Children={'Cardiologist'} />
        <Texts style={Styles.cardSubText} Children={'CSHC567'} />
      </View>
      <View style={Styles.cardContainer}>
        <View style={{flexDirection: 'row'}}>
          <Texts style={Styles.cardSubText} Children={'AB'} />
          <Texts
            style={[Styles.cardSubText, {fontSize: 15, lineHeight: 18}]}
            Children={'+ve'}
          />
        </View>
        <Image
          style={{height: 50, width: 50}}
          source={require('../Assets/Image/qr-code.png')}
        />
        <Texts style={Styles.cardSubText} Children={'9443590707'} />
      </View>
      <View style={Styles.cardContainer}>
        <Texts
          style={Styles.cardSubText}
          Children={'arunsaras48.2@gmail.com'}
        />
      </View>
    </LinearGradient>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#008b02',
    borderRadius: 12,
  },
  cardText: {
    color: '#ffffff',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  cardSubText: {color: '#ffffff', fontSize: 22},
});
