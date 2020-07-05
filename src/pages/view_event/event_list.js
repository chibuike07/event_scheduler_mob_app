import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, Alert, Button} from 'react-native';
import axios from 'axios';

const event_list = ({
  title,
  desc,
  id,
  date,
  eventWrapper,
  text,
  navigation,

  route,
}) => {
  const [data, setData] = useState([]);
  let stringDate = date.split(' ').slice(0, 3);
  const {fullName} = route.params;

  const clickOptions = () => [
    Alert.alert('Event list', 'reschedule event', [
      {text: 'NO'},
      {
        text: 'Yes',
        onPress: () =>
          navigation.navigate('Modify', {
            title,
            date,
            desc,
            id,
            fullName,
          }),
      },
      {text: 'delete event', onPress: () => deleteEvent()},
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
        'http://192.168.43.22:5000/scheduler/user_list/' + value._id,
        value,
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('http://192.168.43.22:5000/scheduler/user_list/')
        .then(res => setData(res.data));
    };
    fetchData();
  }, [route]);
  return (
    <View>
      <TouchableHighlight style={eventWrapper} onPress={() => clickOptions()}>
        <View>
          <Text style={text}>{stringDate.join(' ')}</Text>
          <Text>{title}</Text>
          <Text numberOfLines={10}>{desc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default event_list;
