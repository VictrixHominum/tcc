import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import MainStyle from '../style/mainStyle';

// @ts-ignore
const AccountButton = ({onPress, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
  <Text style={[styles.text]}>{title}</Text>
  </TouchableOpacity>
);
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderTopWidth: 2,
    borderColor: MainStyle.colors.secondary,
    paddingHorizontal: 10,
    marginHorizontal: 10,

  },
  text: {
    fontSize: 22, // Adjust as needed
    color: MainStyle.colors.secondary,
  },
});

export default AccountButton;
