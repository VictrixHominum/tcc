import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardInformation = () => {
  // Account management logic here
  return (
    <View style={styles.container}>
      <Text>Card Information Page</Text>
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

export default CardInformation;
