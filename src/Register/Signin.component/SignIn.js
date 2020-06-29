import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [httpResponse, setHttpResponse] = useState(null);

  let array = [];
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

    //comparing the user input values user authentication
    const {isMatch, email: serverEmail, fullName} = httpResponse;
    if (isMatch === true && serverEmail === email) {
      Alert.alert('success', 'log in successful'); //alert if user is registered and getting the first name and last name
      if (fullName) {
        userNames = `${fullName}`;
      }
      sessionStorage.setItem('loggerName', JSON.stringify(userNames)); //setting the log in user name values to the session storage
      // history.replace('/home'); //routing the logged in user to the home page
      return;
    } else {
      alert('Email or Password incorrect'); // alert if user input values data does not match any registered users data
      return;
    }
  };

  return (
    <View>
      <TextInput
        value={email}
        placeholder="add event"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="add date"
        onChangeText={text => setPass(text)}
      />
      <View>
        <Button title="sign in" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};

export default SignIn;
