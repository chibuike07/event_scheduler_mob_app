import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Alert, TouchableHighlight} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import axios from 'axios';
import {styles} from './add_event_styles';
import LinearGradient from 'react-native-linear-gradient';

const add_event = ({route}) => {
  const [title, handleTitle] = useState('');
  const [reminderDate, handleReminderDate] = useState('');
  const [description, handleDescription] = useState('');
  const {
    container,
    touchableHighlight,
    text,
    textinput,
    textinputmask,
  } = styles;
  const handleSubmit = async () => {
    const {fullName} = route.params;
    if (title === '') {
      Alert.alert('Title', 'Title is required');
      return;
    } else if (reminderDate === '') {
      Alert.alert('Event date', 'Event date is required');
      return;
    } else if (description === '') {
      Alert.alert('Description', 'Description field is required');
      return;
    }
    let eventDetail = {
      title,
      reminderDate,
      description,
      fullName,
    };

    await axios
      .post('http://192.168.43.22:5000/scheduler/events', eventDetail)
      .then(res => {
        if (res.data === 'ok') {
          Alert.alert('Create', 'Event added successfully');
          return;
        }
      })
      .catch(err => console.error(err));
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
          options={{format: 'MM/DD/YYYY HH:MM:SS'}}
          value={reminderDate}
          onChangeText={text => handleReminderDate(text)}
          underlineColorAndroid="rgb(0,102,102)"
          placeholder="MM/DD/YYYY HH:MM:SS"
          placeholderTextColor="#fff"
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
            <Text style={text}>add event</Text>
          </TouchableHighlight>
        </View>
      </View>
    </LinearGradient>
  );
};

export default add_event;
