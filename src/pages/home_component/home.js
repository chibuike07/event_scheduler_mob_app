import React from 'react';
import Signup from '../../Register/SignUp.component/Signup';
import SignIn from '../../Register/Signin.component/SignIn';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Home = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  // const registerScreen = () => (
  //   <Stack.Navigator>
  //     <Stack.Screen name="signup" component={Signup} />
  //     <Stack.Screen name="signin" component={SignIn} />
  //   </Stack.Navigator>
  // );
  // <NavigationContainer>
  //   <Drawer.Navigator>
  //     <Drawer.Screen name="Auth" children={registerScreen} />
  //   </Drawer.Navigator>
  // </NavigationContainer>

  return (
    <View>
      <SignIn />
    </View>
  );
};

export default Home;
