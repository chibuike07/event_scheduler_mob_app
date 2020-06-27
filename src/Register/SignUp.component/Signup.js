import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {styles, name} from './signup_styles';
import axios from 'axios';
import {useDimensions} from '@react-native-community/hooks';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const {screen} = useDimensions();
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
    console.log('userObject', userObject);
    axios
      .post('http://192.168.43.22:5000/scheduler/users', userObject)
      .then(res => {
        if (res.data.status) {
          console.log('response', response);
        }
      })
      .catch(err => console.log(err));
  };
  //   https://medium.com/better-programming/managing-api-requests-http-https-in-react-native-using-axios-9ebf75cbca9b

  return (
    <View
      style={{
        width: screen.width,
        height: screen.height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.view}>
        {/* <Text style={styles.text}>Welcome to our sign up page</Text> */}
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            value={fullName}
            onChangeText={text => setFullName(text)}
            placeholder="add name"
          />
          <TextInput
            style={styles.TextInput}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="add email"
          />
          <TextInput
            style={styles.TextInput}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="add password"
          />
          <TextInput
            style={styles.TextInput}
            value={gender}
            onChangeText={text => setGender(text)}
            placeholder="gender"
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button title="sign up" onPress={postEvents} style={styles.button} />
      </View>
    </View>
  );
};

export default Signup;

// const styles = StyleSheet.create({});
