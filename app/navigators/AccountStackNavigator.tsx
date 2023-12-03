import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
import PersonalInformation from '../screens/PersonalInformation';
import CardInformation from '../screens/CardInformation';
import ReceiptRequest from '../screens/ReceiptRequest';
import PasswordUpdate from '../screens/PasswordUpdate';
import Bookings from '../screens/Bookings';

const Stack = createNativeStackNavigator();

// @ts-ignore
export default function AccountStackNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen options={{headerShown: false}} name="Account" component={Account} initialParams={route.params.member}/>
      <Stack.Screen name="Personal Information" component={PersonalInformation} initialParams={route.params.member}/>
      <Stack.Screen name="Bookings" component={Bookings} initialParams={route.params.member}/>
      <Stack.Screen name="Card Information" component={CardInformation} initialParams={route.params.member}/>
      <Stack.Screen name="Request Receipt" component={ReceiptRequest} initialParams={route.params.member}/>
      <Stack.Screen name="Update Password" component={PasswordUpdate} initialParams={route.params.member}/>
    </Stack.Navigator>
  );
}
