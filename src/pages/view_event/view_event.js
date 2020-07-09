import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import EventList from './event_list';
import axios from 'axios';
import {styles} from './view_event_screen';
import LinearGradient from 'react-native-linear-gradient';

const view_event = ({route, navigation}) => {
  const [viewEvent, handleSetViewEvent] = useState([]);
  const {container, eventWrapper, text} = styles;
  useEffect(() => {
    const fetchEvent = async () => {
      await axios
        .get('http://192.168.43.22:5000/scheduler/user_list')
        .then(res => {
          res.data.map(event => {
            if (event.fullName === route.params.fullName) {
              return handleSetViewEvent(event.event);
            }
          });
        });
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
              date={item.reminderDate}
              time={item.reminderTime}
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

export default view_event;
