import { View, Text, StyleSheet } from 'react-native';
import { Member } from '../types/Member';
import { MembershipCard } from '../components/membershipCard';
import CustomButton from '../components/CustomButton';
import React from 'react';
import MainStyle from '../style/mainStyle';
import TransactionList from '../components/TransactionList';

const exampleTransactions = [
  { id: 1, name: 'Dinner', amount: -50.00, total: 825.00, date: '24/02/2023' },
  { id: 2, name: 'Top-up', amount: 1000.00, total: 875.00, date: '19/02/2023' },
  { id: 3, name: 'Event', amount: -2000.00, total: -125.00, date: '14/02/2023' },
  { id: 4, name: 'Dinner', amount: -75.00, total: 1875.00, date: '09/02/2023' },
  { id: 5, name: 'Dinner', amount: -150.00, total: 1725.00, date: '04/02/2023' },
  { id: 6, name: 'Top-up', amount: 300.00, total: 2025.00, date: '30/01/2023' },
  { id: 7, name: 'Coffee', amount: -3.50, total: 2021.50, date: '25/01/2023' },
  { id: 8, name: 'Lunch', amount: -20.00, total: 2001.50, date: '20/01/2023' },
  { id: 9, name: 'Lunch', amount: -25.00, total: 1976.50, date: '15/01/2023' },
  { id: 10, name: 'Dinner', amount: -60.00, total: 1916.50, date: '10/01/2023' },
  { id: 11, name: 'Dinner', amount: -80.00, total: 1836.50, date: '05/01/2023' }
];


function getBalance(): string {
  return exampleTransactions[0].total.toFixed(2);
}
// @ts-ignore
const BalancePage= ({ route }) => {
  const member: Member = route.params.member;
  const name = `${member.prefix} ${member.firstName} ${member.lastName}`;
  const membershipNumber = member.membershipNumber;
  // Balance display and top-up logic here
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', flex:1, paddingBottom: 60}}>
        <MembershipCard memberName={name} memberNumber={membershipNumber}/>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={MainStyle.divider}></View>
        <Text style={MainStyle.cardName}>Balance: £{getBalance()}</Text>
        <CustomButton
          backgroundColor={MainStyle.colors.backgroundColor}
          textColor={MainStyle.colors.secondary}
          width="75%"
          height={40}
          title="Top Up"
          onPress={() => console.log('Button Pressed')}
          fontSize={30}
        />
      </View>
      <View style={{flex: 2}}>
        <Text style={MainStyle.cardHistory}>Account History:</Text>
        <TransactionList data={exampleTransactions}/>
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
