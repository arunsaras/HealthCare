import React, {useContext} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import Modals from '../Components/Modal';
import {AuthContext, data} from '../Assets/Data/Data';
import {Card} from '../Components/Card';
import {Texts} from '../Components/Text';
import {useDispatch, useSelector} from 'react-redux';
import {
  setDob,
  setGender,
  setModalVisible,
  setName,
} from '../Redux/Action/dashboardAction';

const Dashboard = () => {
  const myDispatch = useDispatch();
  const {signOut} = useContext(AuthContext);
  const modalVisible = useSelector(state => state.Dashboard.modalVisible);
  const name = useSelector(state => state.Dashboard.name);
  const dob = useSelector(state => state.Dashboard.dob);
  const gender = useSelector(state => state.Dashboard.gender);

  const addPatient = () => {
    if (name != '' && dob != '' && gender != '') {
      var patient = {
        name: name,
        gender: gender,
        dob: dob,
      };
      data.unshift(patient);
      myDispatch(setModalVisible(!modalVisible));
      myDispatch(setName(''));
      myDispatch(setGender(''));
      myDispatch(setDob(''));
      Alert.alert('Added successfully');
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.headerContainer}>
        <Texts Children={'My Patients'} />
        <TouchableOpacity onPress={() => myDispatch(setModalVisible(true))}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../Assets/Image/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Card />
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <View style={styles.cardContainer}>
                <Texts style={styles.textpatient} Children={item.name} />
                <Texts style={styles.textpatient} Children={item.dob} />
              </View>
              <Texts style={styles.textpatient} Children={item.gender} />
            </View>
          );
        }}
      />
      <Modal
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.ModelContainer}>
          <Modals
            onPressClose={() => myDispatch(setModalVisible(!modalVisible))}
            onPressAddpat={() => addPatient()}
            name={name}
            dob={dob}
            gender={gender}
            setName={text => myDispatch(setName(text))}
            setDob={text => myDispatch(setDob(text))}
            setGender={text => myDispatch(setGender(text))}
          />
        </View>
      </Modal>
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 25,
          height: 60,
          width: 60,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../Assets/Image/logout.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  textpatient: {
    fontSize: 22,
  },
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#c1e1c5',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ModelContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
