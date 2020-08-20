import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import EventList from './event_list';
import axios from 'axios';
import {styles} from './view_event_screen';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
// require('dotenv').config();

const Courses = ({route, navigation}) => {
  const [viewEvent, handleSetViewEvent] = useState([]);
  const {container, eventWrapper, text} = styles;

  useEffect(() => {
    const fetchEvent = async () => {
      await axios
        .get(`https://schedule-mop-app.herokuapp.com/admin_post/event_update/`)
        .then(res => handleSetViewEvent(res.data));
    };
    fetchEvent();
  }, []);
  return (
    <LinearGradient
      colors={['#008080', '#004c4c', '#66b2b2']}
      style={container}
      start={{x: 2, y: 1}}
      end={{x: 1, y: 2}}>
      {viewEvent.length < 1 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>
            OOOPS!!! NO EVENT YET!!!
          </Text>
        </View>
      ) : (
        <FlatList
          data={viewEvent}
          renderItem={({item, index, separators}) => (
            <EventList
              title={item.title}
              desc={item.description}
              date={item.date}
              time={item.time}
              image={item.image}
              id={item._id}
              eventWrapper={eventWrapper}
              text={text}
              navigation={navigation}
              route={route}
            />
          )}
          keyExtractor={item => item._id}
        />
      )}
    </LinearGradient>
  );
};

export default Courses;
