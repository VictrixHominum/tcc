import React from 'react';
import MemberEditComponent from '../components/MemberEditComponent';
import { View } from 'react-native';
import MainStyle from '../style/mainStyle';

// @ts-ignore
const PersonalInformation = ({ route }) => {
  return (
    <View style={{backgroundColor: MainStyle.colors.backgroundColor, flex: 1}}>
      <MemberEditComponent member={route.params} />
    </View>
  );
};

export default PersonalInformation;
