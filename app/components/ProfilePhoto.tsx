import { TouchableHighlight, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import MainStyle from '../style/mainStyle';

export default function ProfilePhoto() {
  return (<TouchableHighlight
    style={[styles.profileImgContainer, { borderColor: MainStyle.colors.secondary, borderWidth:1 }]}
  >
    <Image source={require('../assets/profile.jpeg')} style={styles.profileImg} />
  </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  profileImgContainer: {
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 100,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  profileImg: {
    height: 150,
    width: 150,
  },
});
