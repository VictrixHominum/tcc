import { View, Text } from 'react-native';
import mainStyle from '../style/mainStyle';
import { Image } from 'expo-image';

export const MembershipCard = () => {
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.memberCardContainer}>
        <Image source={require('../assets/tcc_logo.png')} style={mainStyle.cardImage} />
        <View>
          <Text style={mainStyle.cardName}> Mr Joseph Hollingworth </Text>
          <Text style={mainStyle.cardMember}> Member: 9999 </Text>
        </View>
      </View>
    </View>
  );
}
