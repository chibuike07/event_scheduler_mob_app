import React from 'react';
import {View, Text} from 'react-native';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import homeScreen from './src//pages/home_component/homeScreen';
import List from './src/pages/view_event/event_list';
import Splash from './src//pages/splash_screen/splash_screen';
import RegisterScreen from './src/Register/register.Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="register_page"
          component={RegisterScreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={({route}) => (
            {title: 'My Event'},
            {
              headerRight: () => (
                <View style={{padding: 10}}>
                  <Text
                    style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
                    {route.params.fullName}
                  </Text>
                </View>
              ),
              headerTintColor: '#000',
            }
          )}
        />
        <Stack.Screen name="splash_screen" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
