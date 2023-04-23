// In App.js in a new project

import React, {useState, useMemo, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Src/Pages/Dashboard';
import {enableScreens} from 'react-native-screens';
import Login from './Src/Pages/Login';
import {Provider} from 'react-redux';
import store from './Src/Redux/Store/configureStore';
import {AuthContext, initialLoginState} from './Src/Assets/Data/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {Texts} from './Src/Components/Text';

enableScreens(true);
const Stack1 = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();

function App() {
  const [is_loading, setIs_Loading] = useState(true);
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RetrieveToken':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
        };

      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
    }
  };

  const [loginstate, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = useMemo(() => ({
    signIn: async (ID, Password) => {
      let userToken;
      try {
        userToken = 'LoggedIn';
        await AsyncStorage.setItem('userToken', userToken);
      } catch (error) {
        // Error saving data
        console.log(error);
      }

      dispatch({type: 'LOGIN', id: ID, token: userToken});
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        // Error saving data
        console.log(error);
      }

      dispatch({type: 'LOGOUT'});
    },

    Register: async () => {
      let userToken;
      try {
        userToken = 'uyhoyy';
        await AsyncStorage.setItem('userToken', '');
      } catch (error) {
        // Error saving data
        console.log(error);
      }

      dispatch({type: 'REGISTER', token: userToken});
    },
  }));

  useEffect(() => {
    console.log('timer1');
    setTimeout(async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken);
        setIs_Loading(false);
      } catch (error) {
        // Error saving data
        console.log(error);
      }

      dispatch({type: 'REGISTER', token: userToken});
    }, 2000);
  }, []);

  if (is_loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#008b02',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Texts
          style={{color: '#ffffff'}}
          Children={`CureSelect\n\t\t\t\tHealthCare`}
        />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Provider store={store}>
        <NavigationContainer>
          {loginstate.userToken == null ? (
            <Stack1.Navigator screenOptions={{headerShown: false}}>
              <Stack1.Screen name="Login" component={Login} />
            </Stack1.Navigator>
          ) : (
            <Stack2.Navigator screenOptions={{headerShown: false}}>
              <Stack2.Screen name="Home" component={Dashboard} />
            </Stack2.Navigator>
          )}
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
