import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button, FlatList} from 'react-native';
import axios from 'axios';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [userData, setUserData] = useState(null);

  let array = [];
  const handleSubmit = () => {
    let userEvent = {
      event: password,
      date: email,
    };
    setUserData({userData: [...userData, userEvent]});
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(' http://192.168.43.22:5000/scheduler/user_list')
        .then(res => console.log('res.data', res.data))
        .catch(err => console.error(err));
    };
    fetchData();
  }, []);
  return (
    <View>
      <TextInput
        value={password}
        placeholder="add event"
        onChangeText={text => setPass(text)}
      />
      <TextInput
        value={email}
        placeholder="add date"
        onChangeText={text => setEmail(text)}
      />
      <View>
        <Button title="add event" onPress={() => handleSubmit()} />
      </View>
      <View>
        {/* <FlatList
          data={userData}
          renderItem={({value}, i) => (
            <Text key={i}>
              {value.event} {value.date}
            </Text>
          )}
        /> */}
      </View>
    </View>
  );
};

export default SignIn;
