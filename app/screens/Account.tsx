import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountPage = () => {
  // Account management logic here
  return (
    <View style={styles.container}>
      <Text>Account Page</Text>
      {/* Implement account management functionality */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccountPage;
