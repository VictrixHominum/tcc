import { View, Text } from 'react-native';
import mainStyle from '../style/mainStyle';
import { Image } from 'expo-image';

// @ts-ignore
export const MembershipCard = ({memberName, memberNumber}) => {
  if (memberName == null) {
    memberName = "Mr John Doe";
  }
  if (memberNumber == null) {
    memberNumber = "9999";
  }
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.memberCardContainer}>
        <Image source={require('../assets/tcc_logo.png')} style={mainStyle.cardImage} />
        <View>
          <Text style={mainStyle.cardName}> {memberName} </Text>
          <Text style={mainStyle.cardMember}> Member: {memberNumber} </Text>
        </View>
      </View>
    </View>
  );
}
