import React, {useState} from 'react';
import {Text, View, TextInput, Button, FlatList} from 'react-native';

const SignIn = () => {
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');
  const [userData, setUserData] = useState(null);

  let array = [];
  const handleSubmit = () => {
    let userEvent = {
      event,
      date,
    };
    setUserData({userData: [...userData, userEvent]});
  };

  return (
    <View>
      <TextInput
        value={event}
        placeholder="add event"
        onChangeText={text => setEvent(text)}
      />
      <TextInput
        value={date}
        placeholder="add date"
        onChangeText={text => setDate(text)}
      />
      <View>
        <Button title="add event" onPress={() => handleSubmit()} />
      </View>
      <View>
        <FlatList
          data={userData}
          renderItem={({value}, i) => (
            <Text key={i}>
              {value.event} {value.date}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default SignIn;
