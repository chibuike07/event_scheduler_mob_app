import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const add_event = ({route}) => {
  // const {name} = route.params;
  console.log('props', route);
  return (
    <View>
      <Text>add_event</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default add_event;
