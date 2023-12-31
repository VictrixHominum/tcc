import React, { useEffect, useState } from 'react';
import Home from './screens/Home';
import CalendarPage from './screens/Calendar';
import BalancePage from './screens/Balance';
import AccountPage from './screens/Account';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import mainStyle from './style/mainStyle';
import SignInScreen from './screens/SignIn';
import { StatusBar } from 'expo-status-bar';
import { Member } from './types/Member';
import AccountStackNavigator from './navigators/AccountStackNavigator';


const Tab = createBottomTabNavigator();

// @ts-ignore
function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const [member, setMember] = useState(null);

  useEffect(() => {
    // Check if the user is signed in when the app loadsr
    isUserSignedIn ? console.log('User is signed in') : console.log('User is not signed in');
  }, []);

  function handleSignIn(member: Member) {
    // Function to handle user sign-in
    // @ts-ignore
    setMember(member);
    setUserSignedIn(true);
  }

  function handleSignOut() {
    // Function to handle user sign-out
    setMember(null);
    setUserSignedIn(false)
  }

  if (!isUserSignedIn) {
    // If the user is not signed in, render the sign-in screen
    return <SignInScreen onSignIn={handleSignIn} />;
  }

  // @ts-ignore
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: mainStyle.header,
          headerTintColor: 'white',
          headerTitleStyle: mainStyle.headerTitleStyle,
        }}>
        <Tab.Screen name="Home" component={Home} options={{
          title: 'The Club',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  // @ts-ignore
          member={(member: Member) => member}
        />
        <Tab.Screen name="Club Calendar" component={CalendarPage} options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
          ),
        }}
          initialParams={{ member: member }}
        />
        <Tab.Screen name="My Balance" component={BalancePage} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-outline" color={color} size={size} />
          ),
        }}
          initialParams={{ member: member }}
        />
        <Tab.Screen name="My Account" component={AccountStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-cog-outline" color={color} size={size} />
          ),
        }}
          initialParams={{ member: member }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>

  );
}

export default App;
