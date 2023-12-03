import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import AccountButton from './AccountButton';
export default function AccountList({ navigation }: any) {
    return (
      <View style={styles.container}>
        <AccountButton
        title="Personal Information"
        onPress={() => navigation.navigate('Personal Information')
        }/>
        <AccountButton
          title="Bookings"
          onPress={() => navigation.navigate('Bookings')}/>
        <AccountButton
        title="Card Information"
        onPress={() => navigation.navigate('Card Information')}/>
        <AccountButton
        title="Request Receipt"
        onPress={() => navigation.navigate('Request Receipt')}/>
        <AccountButton
        title="Update Password"
        onPress={() => navigation.navigate('Update Password')}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
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
});
