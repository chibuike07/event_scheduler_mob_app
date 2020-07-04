import React from 'react';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import HomePage from './src/pages/home_component/home';
import RegisterScreen from './src/Register/register.Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="register_page" component={RegisterScreen} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
