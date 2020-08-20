import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// require('dotenv').config();
const event_list = ({
  title,
  desc,
  id,
  date,
  time,
  eventWrapper,
  text,
  navigation,
  route,
}) => {
  const [data, setData] = useState([]);

  let dateString = new Date(date).toDateString();
  const {fullName} = route.params;

  const clickOptions = () => [
    Alert.alert('Event List', 'Reschedule Event', [
      {text: 'Delete Event', onPress: () => deleteEvent()},
      {text: 'NO'},
      {
        text: 'Yes',
        onPress: () =>
          navigation.navigate('Modify', {
            title,
            date,
            desc,
            time,
            id,
            fullName,
          }),
      },
    ]),
  ];

  const deleteEvent = () => {
    let res =
      data &&
      data.filter(value => {
        return route.params.fullName === value.fullName;
      });
    res.map(value => {
      let notRemoved = value.event.filter(({_id}) => {
        return _id !== id;
      });
      value.event = notRemoved;
      axios.put(
        `https://schedule-mop-app.herokuapp.com/scheduler/user_list/${
          value._id
        }`,
        value,
      );
      navigation.replace('view event');
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://schedule-mop-app.herokuapp.com/scheduler/user_list/`)
        .then(res => setData(res.data));
    };
    fetchData();
  }, [route]);
  return (
    <View>
      <TouchableHighlight style={eventWrapper} onPress={() => clickOptions()}>
        <View style={{width: 200, backgroundColor: 'inherit'}}>
          <Text style={text}>
            {dateString} {time}
          </Text>
          <Text>{title}</Text>
          <Text numberOfLines={5}>{desc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default event_list;
