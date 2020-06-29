import React from 'react';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import HomePage from './src/pages/home_component/home';
import RegisterScreen from './src/Register/register.Screen';

// import {Router, Scene, Stack} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const registerScreens = () => (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Auth" children={re} /> */}
    </Drawer.Navigator>
  );

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="register_page" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
