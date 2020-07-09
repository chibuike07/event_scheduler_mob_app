import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {styles} from '../create_event/add_event_styles';
import LinearGradient from 'react-native-linear-gradient';

const home = ({route, navigation}) => {
  const {container, touchableHighlight, text} = styles;
  return (
    <LinearGradient
      colors={['#008080', '#004c4c', '#66b2b2']}
      style={container}
      start={{x: 2, y: 1}}
      end={{x: 1, y: 2}}>
      <TouchableHighlight
        style={touchableHighlight}
        onPress={() => navigation.navigate('Event')}>
        <Text style={text}>Add Event</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={touchableHighlight}
        onPress={() => navigation.navigate('view event')}>
        <Text style={text}>View Event</Text>
      </TouchableHighlight>
    </LinearGradient>
  );
};
export default home;
