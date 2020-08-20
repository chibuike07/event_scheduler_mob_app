import React, {useState} from 'react';
import {Text, View, TextInput, Alert, TouchableHighlight} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import axios from 'axios';
import {styles} from './add_event_styles';
import LinearGradient from 'react-native-linear-gradient';
// import {HOST} from 'react-native-dotenv';
// require('dotenv').config();
import AsyncStorage from '@react-native-community/async-storage';

const add_event = ({route, navigation}) => {
  const [title, handleTitle] = useState('');
  const [reminderDate, handleReminderDate] = useState('');
  const [reminderTime, handleReminderTime] = useState('');
  const [description, handleDescription] = useState('');
  const [isValidDate, setIsValidDate] = useState();
  const [isValidTime, setIsValidTime] = useState();

  const {
    container,
    touchableHighlight,
    text,
    textinput,
    textinputmask,
  } = styles;

  const handleSubmit = async () => {
    let validDate = isValidDate.isValid();
    let validTime = isValidTime.isValid();
    const {fullName} = route.params;
    if (title === '') {
      Alert.alert('Title', 'Title is required');
      return;
    } else if (reminderDate === '') {
      Alert.alert('Event Date', 'Event date is required');
      return;
    } else if (validDate !== true) {
      Alert.alert('Event Date', 'Date is invalid');
      return;
    } else if (reminderTime === '') {
      Alert.alert('Time', 'Time is required');
      return;
    } else if (validTime !== true) {
      Alert.alert('Time', 'Time is invalid');
      return;
    } else if (description === '') {
      Alert.alert('Description', 'Description field is required');
      return;
    }

    let eventDetail = {
      title,
      reminderDate,
      reminderTime,
      description,
      fullName,
    };

    await axios
      .post(
        `https://schedule-mop-app.herokuapp.com/scheduler/events`,
        eventDetail,
      )
      .then(res => {
        if (res.data === 'ok') {
          Alert.alert('Create', 'Event added successfully');
          navigation.replace('Event');
          return;
        }
      })
      .catch(err => err);
  };

  return (
    <LinearGradient colors={['#008080', '#66b2b2']} style={container}>
      <View>
        <TextInput
          style={textinput}
          value={title}
          onChangeText={text => handleTitle(text)}
          placeholder="Title"
          placeholderTextColor="#fff"
          underlineColorAndroid="rgb(0,102,102)"
        />

        <TextInputMask
          style={textinputmask}
          type={'datetime'}
          options={{format: 'MM/DD/YYYY'}}
          value={reminderDate}
          onChangeText={text => handleReminderDate(text)}
          underlineColorAndroid="rgb(0,102,102)"
          placeholder="MM/DD/YYYY"
          placeholderTextColor="#fff"
          ref={ref => setIsValidDate(ref)}
        />
        <TextInputMask
          style={textinputmask}
          type={'datetime'}
          options={{format: 'HH:mm:ss'}}
          value={reminderTime}
          onChangeText={text => handleReminderTime(text)}
          underlineColorAndroid="rgb(0,102,102)"
          placeholder="HH:MM:SS"
          placeholderTextColor="#fff"
          ref={ref => setIsValidTime(ref)}
        />
        <TextInput
          style={textinput}
          value={description}
          multiline={true}
          numberOfLines={5}
          onChangeText={text => handleDescription(text)}
          placeholder="Description"
          underlineColorAndroid="rgb(0,102,102)"
          placeholderTextColor="#fff"
        />
        <View>
          <TouchableHighlight style={touchableHighlight} onPress={handleSubmit}>
            <Text style={text}>Add Event</Text>
          </TouchableHighlight>
        </View>
      </View>
    </LinearGradient>
  );
};

export default add_event;
