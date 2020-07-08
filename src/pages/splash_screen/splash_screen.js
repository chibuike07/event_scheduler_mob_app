import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const splash_screen = ({navigation}) => {
  const timeOut = () => {
    setTimeout(() => {
      navigation.navigate('register_page');
    }, 7000);
  };

  useEffect(() => {
    timeOut();
  }, []);
  return (
    <LinearGradient
      colors={['#008080', '#004c4c', '#66b2b2']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      start={{x: 2, y: 1}}
      end={{x: 1, y: 2}}>
      <SafeAreaView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Image
              source={require('./event.png')}
              style={{
                width: 200,
                height: 300,
                borderRadius: 50,
                backgroundColor: '#66b2b2',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 20,
                textTransform: 'uppercase',
              }}>
              Welcome to my world
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 15,
                marginTop: 5,
                textTransform: 'uppercase',
              }}>
              manage your event from today
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 15,
                marginTop: 5,
                textTransform: 'uppercase',
              }}>
              {' '}
              with a schedule app
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default splash_screen;

const styles = StyleSheet.create({});
