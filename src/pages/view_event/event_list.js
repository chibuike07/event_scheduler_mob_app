import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';

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
  let weekDay = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let day = weekDay[new Date(date).getDay()];
  let month = months[new Date(date).getMonth()];
  let dateNum = new Date(date).getDate();
  let dateString = `${month} ${day} ${dateNum}`;
  console.log(dateString);
  const {fullName} = route.params;

  const clickOptions = () => [
    Alert.alert('Event List', 'Reschedule Event', [
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
      {text: 'Delete Event', onPress: () => deleteEvent()},
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
          <Text style={text}>
            {dateString} {time}
          </Text>
          <Text>{title}</Text>
          <Text numberOfLines={10}>{desc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default event_list;
