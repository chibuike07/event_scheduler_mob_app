import {StyleSheet} from 'react-native';
import {placeholder} from '@babel/types';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,128,128)',
  },
  wrapper: {
    margin: 'auto',
    backgroundColor: 'rgb(102,178,178)',
    height: 400,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  touchableHighlight: {
    width: 200,
    backgroundColor: 'rgb(0, 102, 102)',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textinput: {
    backgroundColor: 'rgb(178,216,216)',
    width: 200,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  login_button_text: {
    color: '#fff',
    fontSize: 20,
  },
});
