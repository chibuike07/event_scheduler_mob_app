import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {styles} from '../create_event/add_event_styles';
import LinearGradient from 'react-native-linear-gradient';

const home = ({route, navigation}) => {
  const {container, touchableHighlight, text} = styles;
  const {fullName} = route.params;
  return (
    <LinearGradient
      colors={['#008080', '#004c4c', '#66b2b2']}
      style={container}
      start={{x: 2, y: 1}}
      end={{x: 1, y: 2}}>
      <TouchableHighlight
        style={touchableHighlight}
        onPress={() => navigation.navigate('Event', {fullName})}>
        <Text style={text}>add event</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={touchableHighlight}
        onPress={() => navigation.navigate('view event', {fullName})}>
        <Text style={text}>view event</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
};
export default home;
