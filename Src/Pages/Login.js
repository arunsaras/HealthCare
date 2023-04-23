import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TextInputs from '../Components/TextInputs';
import {Button} from '../Components/Button';
import {Texts} from '../Components/Text';
import {useDispatch, useSelector} from 'react-redux';
import {
  setErrUserName,
  setErrUserPassword,
  setUserID,
  setUserPassword,
} from '../Redux/Action/loginAction';
import {AuthContext} from '../Assets/Data/Data';

const Login = () => {
  const myDispatch = useDispatch();
  const {signIn} = useContext(AuthContext);
  const userName = useSelector(state => state.Login.userID);
  const password = useSelector(state => state.Login.password);
  const errUserName = useSelector(state => state.Login.errUserID);
  const errUserpassword = useSelector(state => state.Login.errPassword);
  useEffect(() => {
    if (
      userName != '' &&
      password != '' &&
      errUserName == '' &&
      errUserpassword == ''
    ) {
      signIn();
    }
  }, [errUserName, errUserpassword]);

  const login = () => {
    UserNameValidation();
    PasswordValidaion();
  };

  const UserNameValidation = () => {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(userName)) {
      myDispatch(setErrUserName(''));
    } else {
      myDispatch(setErrUserName('please enter valid userID'));
      return 0;
    }
  };
  const PasswordValidaion = () => {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/g;
    if (regex.test(password)) {
      myDispatch(setErrUserPassword(''));
    } else {
      myDispatch(
        setErrUserPassword('Password should be minimum 7 alphanumeric'),
      );
    }
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.subcontainer}>
        <Texts Children={`CureSelect\n\t\t\t\tHealthCare`} />
      </View>
      <View style={[Styles.subcontainer, {marginTop: 45}]}>
        <TextInputs
          secureTextEntry={false}
          placeholder={'User ID'}
          value={userName}
          onChangeText={text => myDispatch(setUserID(text))}
        />
        <View style={{width: '100%'}}>
          <Text style={{color: 'red'}}>{errUserName}</Text>
        </View>
      </View>
      <View style={Styles.subcontainer}>
        <TextInputs
          secureTextEntry={true}
          placeholder={'Password'}
          value={password}
          onChangeText={text => myDispatch(setUserPassword(text))}
        />
        <View style={{width: '100%'}}>
          <Text style={{color: 'red'}}>{errUserpassword}</Text>
        </View>
      </View>
      <View style={Styles.subcontainer}>
        <Button ButtonText={'Login'} onPress={() => login()} />
      </View>
    </View>
  );
};
export default Login;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    paddingTop: 20,
    width: '80%',
    alignItems: 'center',
  },
});
