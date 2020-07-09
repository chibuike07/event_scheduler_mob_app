import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from '../create_event/add_event_styles';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const modify_events = ({route, navigation}) => {
  const [title, handleTitle] = useState('');
  const [reminderDate, handleReminderDate] = useState('');
  const [reminderTime, handleReminderTime] = useState('');
  const [description, handleDescription] = useState('');
  const [id, handleId] = useState('');
  const [data, setData] = useState([]);
  const {textinput, textinputmask, container, text} = styles;

  const handleModify = async () => {
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
      reminderTime,
      description,
    };
    let res =
      data &&
      data.filter(value => {
        return route.params.fullName === value.fullName;
      });
    res.map(value => {
      let updatedEventIndex = value.event.findIndex((values, index) => {
        return values._id === id;
      });
      value.event.splice(updatedEventIndex, 1, eventDetail);
      axios.put(
        `http://192.168.43.22:5000/scheduler/user_list/${value._id}`,
        value,
      );
    });
    Alert.alert('Event Update', 'Event updated successfully');
    navigation.navigate('Home');
  };

  useEffect(() => {
    const {title, id, desc, date, time} = route.params;
    handleTitle(title);
    handleDescription(desc);
    handleReminderDate(date);
    handleReminderTime(time);
    handleId(id);
    const fetchData = async () => {
      await axios
        .get(`http://192.168.43.22:5000/scheduler/user_list`)
        .then(res => setData(res.data));
    };
    fetchData();
    console.log('dateModify', date);
  }, [route]);
  return (
    <LinearGradient
      colors={['#008080', '#004c4c', '#66b2b2']}
      style={container}
      start={{x: 2, y: 1}}
      end={{x: 1, y: 2}}>
      <View style={{width: 250}}>
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
        />
        <TextInputMask
          style={textinputmask}
          type={'datetime'}
          options={{format: 'HH:MM:SS'}}
          value={reminderTime}
          onChangeText={text => handleReminderTime(text)}
          underlineColorAndroid="rgb(0,102,102)"
          placeholder="HH:MM:SS"
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
      </View>
      <View>
        <TouchableHighlight
          style={{
            backgroundColor: '#004c4c',
            width: 200,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => handleModify()}>
          <Text style={text}>Update</Text>
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
};

export default modify_events;
