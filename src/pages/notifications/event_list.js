import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, Alert, Image} from 'react-native';
import axios from 'axios';
// require('dotenv').config();
import AsyncStorage from '@react-native-community/async-storage';
const event_list = ({
  title,
  desc,
  id,
  date,
  time,
  image,
  eventWrapper,
  text,
  navigation,
  route,
}) => {
  const [data, setData] = useState([]);

  let dateString = new Date(date).toDateString();
  console.log('dateString', dateString);
  const {fullName} = route.params;
  const clickOptions = () => [
    Alert.alert('Event List', 'Reschedule Event', [
      {text: 'Delete Event', onPress: () => deleteEvent()},
      {text: 'NO'},
      {
        text: 'Yes',
        onPress: () =>
          navigation.navigate('event_detail', {
            title,
            date,
            desc,
            time,
            id,
            image,
          }),
      },
    ]),
  ];

  const deleteEvent = async () => {
    data &&
      data.filter(async value => {
        if (value._id === id) {
          setId(value._id);
          await axios.delete(
            `https://schedule-mop-app.herokuapp.com/admin_post/event_update/${
              value._id
            }`,
            value,
          );
          // return value;
        }
      });
    navigation.replace('view event');
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://schedule-mop-app.herokuapp.com/admin_post/event_update/`)
        .then(res => setData(res.data));
    };
    fetchData();
  }, [route]);
  return (
    <View>
      <TouchableHighlight style={eventWrapper} onPress={() => clickOptions()}>
        <View style={{width: 200, backgroundColor: 'inherit'}}>
          <View>
            <Image
              source={{uri: image}}
              style={{
                width: 200,
                height: 150,
                borderRadius: 50,
                backgroundColor: '#66b2b2',
              }}
            />
          </View>
          <Text>{title}</Text>
          <Text style={text}>
            {dateString} {time}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default event_list;
