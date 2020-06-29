import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'blue',
  },
  buttonView: {
    width: '50%',
    height: 7,
    marginTop: 40,
  },
  button: {
    // shadowOffset: {height: 40, width: 10},
  },
  TextInput: {
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    padding: 10,
    width: '200%',
    marginTop: 10,
  },
});
