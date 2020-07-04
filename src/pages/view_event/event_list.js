import React from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
const event_list = ({title, desc, id, date, eventWrapper, text}) => {
  let stringDate = date.split(' ').slice(0, 3);

  const clickOptions = ({navigation}) => [
    Alert.alert('Event list', 'reschedule event', [
      {text: 'Yes', onPress: () => navigation.navigate('')},
      {text: 'No', onPress: () => console.log(text)},
    ]),
  ];
  return (
    <View>
      <TouchableHighlight style={eventWrapper} onPress={() => clickOptions()}>
        <View>
          <Text style={text}>{stringDate.join(' ')}</Text>
          <Text>{title}</Text>
          <Text numberOfLines={1}>{desc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default event_list;
