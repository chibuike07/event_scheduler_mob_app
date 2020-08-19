import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Alert, Image} from 'react-native';

const eventDetails = ({route, navigation}) => {
  const [title, handleTitle] = useState('');
  const [image, handleImage] = useState();
  const [date, handleDate] = useState('');
  const [time, handleTime] = useState('');
  const [description, handleDescription] = useState('');
  const [id, handleId] = useState('');

  useEffect(() => {
    const renderParams = async () => {
      const {title, id, desc, date, time, image} = await route.params;
      handleTitle(title);
      handleDescription(desc);
      handleDate(date);
      handleTime(time);
      handleId(id);
      handleImage(image);
    };
    renderParams();
  }, [route]);

  let dateString = new Date(date).toDateString();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: 200,
        height: 100,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <Image
            source={{uri: image}}
            style={{
              width: 300,
              height: 300,
              borderRadius: 50,
              backgroundColor: '#66b2b2',
              margin: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            width: 200,
          }}>
          <ScrollView style={{width: 300, padding: 10}}>
            <Text>{title}</Text>
            <Text>
              {dateString} {time}
            </Text>
            <Text>{description}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default eventDetails;
