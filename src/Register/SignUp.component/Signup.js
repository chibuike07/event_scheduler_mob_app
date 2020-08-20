import React, {useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import {styles} from '../Styles.components/signup_styles';
import axios from 'axios';
import {TouchableHighlight} from 'react-native-gesture-handler';
// require('dotenv').config();
const Signup = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const {
    container,
    login_button_text,
    textinput,
    touchableHighlight,
    wrapper,
  } = styles;

  const postEvents = async () => {
    if (fullName === '') {
      Alert.alert('input', 'Name is required');
      return;
    } else if (email === '') {
      Alert.alert('input', `Email is required`);
      return;
    } else if (!email.includes('@' && '.')) {
      Alert.alert('Email Field', `@ or . missing`);
      return;
    } else if (password === '') {
      Alert.alert('input', 'Password is required');
      return;
    } else if (password.length < 8) {
      Alert.alert('Password', 'Password must be upto 8 character or above');
      return;
    } else if (gender === '') {
      Alert.alert('input', 'Gender is required');
    }
    let userObject = {
      fullName,
      email,
      password,
      gender,
    };

    axios
      .post(
        `https://schedule-mop-app.herokuapp.com/scheduler/users`,
        userObject,
      )
      .then(res => {
        if (res.status === 200) {
          // console.log('res.data', res.data);
          Alert.alert('Success', 'Tnanks for signing with us');
          navigation.replace('signin');
        } else if (res.status === 301) {
          console.log('res.data', res.data);
        } else if (res.status === 401) {
          console.log('res.data', res.data);
        }
      })
      .catch(err => err);
  };

  return (
    <View style={container}>
      <View style={wrapper}>
        <View>
          <TextInput
            style={textinput}
            value={fullName}
            onChangeText={text => setFullName(text)}
            placeholder="add name"
            placeholderTextColor={'#000'}
          />
          <TextInput
            style={textinput}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="add email"
            placeholderTextColor={'#000'}
          />
          <TextInput
            style={textinput}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="add password"
            placeholderTextColor={'#000'}
            secureTextEntry={true}
          />
          <TextInput
            style={textinput}
            value={gender}
            onChangeText={text => setGender(text)}
            placeholder="gender"
            placeholderTextColor={'#000'}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableHighlight onPress={postEvents} style={touchableHighlight}>
            <Text style={login_button_text}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Signup;
