import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

// @ts-ignore
const CustomButton = ({ backgroundColor, textColor, width, height, onPress, title, fontSize }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Optional for rounded corners
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
  text: {
    fontSize: 16, // Adjust as needed
  },
});

export default CustomButton;
