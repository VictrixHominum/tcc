import React from 'react';
import MainStyle from '../style/mainStyle';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProfilePhoto from '../components/ProfilePhoto';
import AccountList from '../components/AccountList';
import { Member } from 'types/Member';


// @ts-ignore
const AccountPage = ({ route, navigation } ) => {
  const member: Member = route.params;
  const name = `${member.prefix} ${member.firstName} ${member.lastName}`;
  const membershipNumber = member.membershipNumber;
  // Account management logic here
  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 15}}>
        <ProfilePhoto/>
        <Text style={MainStyle.cardName}>{name}</Text>
        <Text style={[MainStyle.cardMember, {alignSelf: 'center'}]}>Member: {membershipNumber}</Text>
      </View>
      <AccountList navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MainStyle.colors.backgroundColor,
  },
});

export default AccountPage;
