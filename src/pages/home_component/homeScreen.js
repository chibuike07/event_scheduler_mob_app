import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import HomePage from './home';
import CreatEvent from '../create_event/add_event';
import ViewEvent from '../view_event/view_event';
import Course from '../notifications/event';
import Modify from '../modify_event_screen/modify_events';
import EventDetails from '../notifications/eventDetail';

import {createStackNavigator} from '@react-navigation/stack';

const homeScreen = ({route, navigation}) => {
  const Stack = createStackNavigator();
  const HomeScreens = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={HomePage}
        initialParams={route.params}
      />
      <Stack.Screen
        name="Event"
        component={CreatEvent}
        initialParams={route.params}
      />
      <Stack.Screen
        name="view event"
        component={ViewEvent}
        initialParams={route.params}
      />
      <Stack.Screen
        name="course"
        component={Course}
        initialParams={route.params}
      />
      <Stack.Screen name="Modify" component={Modify} />
      <Stack.Screen name="event_detail" component={EventDetails} />
    </Stack.Navigator>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" children={HomeScreens} />
    </Stack.Navigator>
  );
};

export default homeScreen;
