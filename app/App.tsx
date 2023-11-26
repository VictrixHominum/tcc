import React, { useEffect, useState } from 'react';
import Home from './screens/Home';
import CalendarPage from './screens/Calendar';
import BalancePage from './screens/Balance';
import AccountPage from './screens/Account';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainStyle from './style/mainStyle';
import SignInScreen from './screens/SignIn';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

// @ts-ignore
function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in when the app loadsr
    isUserSignedIn ? console.log('User is signed in') : console.log('User is not signed in');
  }, []);

  function handleSignIn() {
    // Function to handle user sign-in
    setUserSignedIn(true);
  }

  function handleSignOut() {
    // Function to handle user sign-out
    setUserSignedIn(false)
  }

  if (!isUserSignedIn) {
    // If the user is not signed in, render the sign-in screen
    return <SignInScreen onSignIn={handleSignIn} />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerStyle: mainStyle.header, headerTintColor: 'white', headerTitleStyle: mainStyle.headerTitleStyle}}>
        <Tab.Screen name="Home" component={Home} options={{title: 'The Club'}} />
        <Tab.Screen name="Calendar" component={CalendarPage}/>
        <Tab.Screen name="My Balance" component={BalancePage}/>
        <Tab.Screen name="My Account" component={AccountPage}/>
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>

  );
}

export default App;
