import React from 'react';
import Signup from './src/Register/SignUp.component/Signup';
import SignIn from './src/Register/Signin.component/SignIn';
import HomePage from './src/pages/home_component/home';
import CreatEvent from './src//pages/create_event/add_event';
import ViewEvent from './src/pages/view_event/view_event';
import Modify from './src/pages/modify_event_screen/modify_events';
import List from './src/pages/view_event/event_list';
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
          component={HomePage}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Event"
          component={CreatEvent}
          options={{
            title: 'Add Event',
          }}
        />
        <Stack.Screen
          name="view event"
          component={ViewEvent}
          options={{
            title: 'My Events',
          }}
        />
        <Stack.Screen
          name="Modify"
          component={Modify}
          options={{
            title: 'Update Event',
          }}
        />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
