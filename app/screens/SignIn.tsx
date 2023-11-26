import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import signInStyle from '../style/signInStyle';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { Member } from '../types/Member';

// @ts-ignore
const SignInScreen = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try {
      console.log('Sign in success!');
      const member = new Member({
        id: 1,
        prefix: 'Mr',
        firstName: 'Joseph',
        lastName: 'Hollingworth',
        membershipNumber: '9999',
        email: 'jchhollingworth97@gmail.com'
      });
      onSignIn(member);
    } catch (error) {
      console.log('Error signing in...', error);
    }
  };

  return (
    <View style={signInStyle.container}>
      <Image source={require('../assets/tcc_logo.png')} style={signInStyle.image} />
      <View style={signInStyle.view}>

        <TextInput
          style={signInStyle.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <TextInput
          style={signInStyle.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button color="#A7882E" title="Sign In" onPress={logIn} />
      </View>
      <StatusBar style="light"/>
    </View>
  );
};

export default SignInScreen;

