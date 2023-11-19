import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { signIn } from 'aws-amplify/auth';

// @ts-ignore
const SignInScreen = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try {
      const user = await signIn({ username, password });
      console.log('Sign in success!', user);
      onSignIn();
    } catch (error) {
      console.log('Error signing in...', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default SignInScreen;

