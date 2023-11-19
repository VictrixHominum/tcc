import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainStyle from './style/mainStyle';
// @ts-ignore
function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  return (
    <View style={mainStyle.view}>
      <Text style={ mainStyle.text }>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Tab = createBottomTabNavigator();
// @ts-ignore
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerStyle: mainStyle.header, headerTintColor: 'white', headerTitleStyle: mainStyle.headerTitleStyle}}>
        <Tab.Screen name="Home" component={Home} options={{title: 'The Club'}} />
        <Tab.Screen name="Details" component={DetailsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
