import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import {styles} from '../Styles.components/SignIn_styles';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [httpResponse, setHttpResponse] = useState(null);
  const {
    container,
    touchableHighlight,
    login_button_text,
    wrapper,
    textinput,
  } = styles;

  const handleSubmit = async () => {
    let userNames;
    //conditioniong the input values
    if (email === '') {
      alert('email must not be left empty');
      return;
    } else if (!email.includes('@' && '.')) {
      Alert.alert('email', `@ or . missing`);
      return;
    } else if (password === '') {
      Alert.alert('password', 'password must not be left empty');
      return;
    } else if (password.length < 8) {
      Alert.alert('password', `password must be less than eight`);
      return;
    }
    let userEvent = {
      email,
      password,
    };
    await axios
      .post('http://192.168.43.22:5000/signincheck', userEvent)
      .then(res => setHttpResponse(res.data))
      .catch(err => console.error(err));

    console.log('httpResponse', httpResponse);
    //comparing the user input values user authentication
    const {isMatch, email: serverEmail, fullName} = httpResponse;
    console.log('isMatch', isMatch);
    if (isMatch === true && serverEmail === email) {
      Alert.alert('success', 'log in successful'); //alert if user is registered and getting the first name and last name
      if (fullName) {
        userNames = `${fullName}`;
      }
      // sessionStorage.setItem('loggerName', JSON.stringify(userNames)); //setting the log in user name values to the session storage
      navigation.navigate('Home'); //routing the logged in user to the home page
      return;
    } else {
      alert('Email or Password incorrect'); // alert if user input values data does not match any registered users data
      return;
    }
  };

  return (
    <View style={container}>
      <View style={wrapper}>
        <View>
          <TextInput
            value={email}
            placeholder="add email"
            onChangeText={text => setEmail(text)}
            style={textinput}
            placeholderTextColor={'#000'}
          />
          <TextInput
            value={password}
            placeholder="add password"
            onChangeText={text => setPass(text)}
            style={textinput}
            placeholderTextColor={'#000'}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableHighlight
            title="sign in"
            onPress={handleSubmit}
            style={touchableHighlight}>
            <Text style={login_button_text}>Log in</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
