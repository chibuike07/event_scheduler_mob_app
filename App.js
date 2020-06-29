import React from 'react';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import HomePage from './src/pages/home_component/home';
import CreatEvent from './src/pages/create_event/add_event';
import ViewEvent from './src/pages/view_event/view_event';
import RegisterScreen from './src/Register/register.Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';

const App = () => {
  const HomeScreen = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="create event" component={CreatEvent} />
      <Drawer.Screen name="view event" component={ViewEvent} />
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
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Home" children={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
