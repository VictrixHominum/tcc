import { View, Text, StyleSheet } from 'react-native';
import { Member } from '../types/Member';
import { MembershipCard } from '../components/membershipCard';
import React from 'react';
import MainStyle from '../style/mainStyle';


// @ts-ignore
const BalancePage= ({ route }) => {
  const member: Member = route.params.member;
  const name = `${member.prefix} ${member.firstName} ${member.lastName}`;
  const membershipNumber = member.membershipNumber;
  // Balance display and top-up logic here
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flex:0.5}}>
        <MembershipCard memberName={name} memberNumber={membershipNumber}/>
      </View>
      <View style={styles.container}>
        <View style={MainStyle.divider}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BalancePage;
