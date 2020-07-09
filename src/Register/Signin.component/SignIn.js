import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Alert, TouchableHighlight} from 'react-native';
import axios from 'axios';
import {styles} from '../Styles.components/SignIn_styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const {
    container,
    touchableHighlight,
    login_button_text,
    wrapper,
    textinput,
  } = styles;

  const handleSubmit = async () => {
    //conditioning the input values
    if (email === '') {
      Alert.alert('Email Field', 'Email must not be left empty');
      return;
    } else if (!email.includes('@' && '.')) {
      Alert.alert('Email Field', `@ or . missing`);
      return;
    } else if (password === '') {
      Alert.alert('Password Field', 'Password must not be left empty');
      return;
    } else if (password.length < 8) {
      Alert.alert('Password Field', `Password must be less than eight`);
      return;
    }
    let userEvent = {
      email,
      password,
    };

    await axios
      .post('http://192.168.43.22:5000/signincheck', userEvent)
      .then(res => {
        // comparing the user input values user authentication
        let {fullName} = res.data;
        if (res.data.statusr === 401) {
          Alert.alert('Sign In', 'Email or Password incorrect');
        } else if (res.status === 200) {
          Alert.alert('Success', 'Log in successful'); //alert if user is registered and getting the first name
          if (fullName) {
            navigation.navigate('Home', {fullName}); //routing the logged in user to the Event page
          }
        } else if (res.status === 500) {
          console.log('server error');
        }
      })
      .catch(err => console.error(err));
  };
  return (
    <View style={container}>
      <View style={wrapper}>
        <View>
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            style={textinput}
            placeholderTextColor={'#000'}
          />
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={text => setPass(text)}
            style={textinput}
            placeholderTextColor={'#000'}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableHighlight onPress={handleSubmit} style={touchableHighlight}>
            <Text style={login_button_text}>Log In</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
