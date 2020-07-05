import React, {useState} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {styles} from '../Styles.components/signup_styles';
import axios from 'axios';
import {TouchableHighlight} from 'react-native-gesture-handler';

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
      Alert.alert('input', 'full name must not be left empty');
      return;
    } else if (email === '') {
      Alert.alert('input', `email must not be left empty`);
      return;
    } else if (gender === '') {
      Alert.alert('input', 'gender must not be left empty');
      return;
    } else if (gender === '') {
      Alert.alert('input', 'gender is required');
    }
    let userObject = {
      fullName,
      email,
      password,
      gender,
    };

    axios
      .post('http://192.168.43.22:5000/scheduler/users', userObject)
      .then(res => {
        if (res.data.status) {
          console.log('response', response);
        }
      })
      .catch(err => console.log(err));
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
            <Text style={login_button_text}>sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Signup;

// const styles = StyleSheet.create({});
