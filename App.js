/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import HomePage from './src/pages/home_component/home';

// import {Router, Scene, Stack} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const registerScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
  const handleHomePage = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Auth" children={registerScreen} />
        <Drawer.Screen name="Home" children={handleHomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
