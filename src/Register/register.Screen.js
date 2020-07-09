import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from './Styles.components/registered_Styles';

const RegisterScreen = ({navigation}) => {
  const {container, touchableOpacity, text} = styles;
  return (
    <View style={container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('signin')}
          style={touchableOpacity}>
          <Text style={text}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Sign up"
          onPress={() => navigation.navigate('signup')}
          style={touchableOpacity}>
          <Text style={text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
