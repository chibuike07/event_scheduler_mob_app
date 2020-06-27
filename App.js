/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import SignIn from './src/SignIn';
import SignUp from './src/Register/SignUp.component/Signup';

const App = () => {
  // console.log('styles', styles);
  return (
    <View style={styles.conta}>
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  conta: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'yellow',
    // backgroundColor: 'yellow',
    textAlign: 'center',
  },
});

export default App;
