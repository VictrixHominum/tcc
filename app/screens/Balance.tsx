import { View, Text, StyleSheet } from 'react-native';
import { Member } from '../types/Member';
import { MembershipCard } from '../components/membershipCard';
import React from 'react';
import MainStyle from '../style/mainStyle';

function getBalance(): string {
  return "0.00";
}
// @ts-ignore
const BalancePage= ({ route }) => {
  const member: Member = route.params.member;
  const name = `${member.prefix} ${member.firstName} ${member.lastName}`;
  const membershipNumber = member.membershipNumber;
  // Balance display and top-up logic here
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', flex:0.5}}>
        <MembershipCard memberName={name} memberNumber={membershipNumber}/>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={MainStyle.divider}></View>
        <Text style={MainStyle.cardName}>Balance: £{getBalance()}</Text>

        <Text style={MainStyle.cardHistory}>History:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePage;
