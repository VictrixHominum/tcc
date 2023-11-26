import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MembershipCard } from '../components/membershipCard';

const BalancePage = () => {
  // Balance display and top-up logic here
  return (
    <View style={styles.container}>
      <MembershipCard memberName='Mr Joseph Hollingworth' memberNumber='9999'/>
      {/* Implement balance and top-up functionality */}
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

export default BalancePage;
