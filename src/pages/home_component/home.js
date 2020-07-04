import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CreatEvent from '../create_event/add_event';
import ViewEvent from '../view_event/view_event';
const StacK = createStackNavigator();
const Drawer = createDrawerNavigator();

const home = ({route}) => {
  const EventScreen = () => (
    <Drawer.Navigator>
      <Drawer.Screen
        name="add event"
        component={CreatEvent}
        initialParams={route.params}
      />
      <Drawer.Screen
        name="view event"
        component={ViewEvent}
        initialParams={route.params}
      />
    </Drawer.Navigator>
  );
  return (
    <StacK.Navigator>
      <StacK.Screen name="event" children={EventScreen} />
    </StacK.Navigator>
  );
};
export default home;
const styles = StyleSheet.create({});
