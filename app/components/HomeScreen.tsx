import { ImageBackground, ScrollView, Text, View } from 'react-native';
import mainStyle from '../../style/mainStyle';
import * as React from 'react';

function getStatusText() {
  const dayMap = {}
  const now = new Date();
  const day = now.getDay().toString();
  const time = now.getUTCHours();
  const hours: Record<string, [number, number, string]> = {
    '2': [10, 17, 'Tuesday'],
    '3': [10, 17, 'Wednesday'],
    '4': [10, 23, 'Thursday'],
    '5': [10, 23, 'Friday'],
    '6': [10, 16, 'Saturday']
  }
  const closedDays = ['0', '1']
  if (closedDays.includes(day) || time < hours[day][0] || time >= hours[day][1]) {
    if (closedDays.includes(day) || time >= hours[day][1]) {
      let nextDay = (Number.parseInt(day)) + 1 % 7;
      if (nextDay === 0 || nextDay === 1) nextDay = 2;
      return <Text style={[mainStyle.headerText, {color: 'red'}]}>We will next be open at {hours[nextDay.toString()][0]}:00 on {hours[nextDay.toString()][2]}</Text>;
    } else {
      return <Text style={[mainStyle.headerText, {color: 'red'}]}>We will be open at {hours[day][0]}:00 today</Text>;
    }
  }
  return <Text style={[mainStyle.headerText, {fontWeight: "400"}]}>We are open!</Text>;
}

// @ts-ignore
export default function HomeScreen() {
  return (
    <ScrollView style={ [mainStyle.view] }>
      <ImageBackground style={{width: '100%', flex: 1, justifyContent: 'center',alignItems: 'center', height: 200}} source={require("./../../assets/club_entrance.png")}>
        <Text style={[mainStyle.coverText]}>The County Club</Text>
        <Text style={[mainStyle.coverText, {fontSize: 32}]}>Since 1882</Text>
      </ImageBackground>
      <View style={[mainStyle.view, {paddingTop: 10, paddingHorizontal: 10}]}>
        <Text style={mainStyle.headerText}>WELCOME TO THE COUNTY CLUB GUILDFORD</Text>
        {getStatusText()}
        <Text style={mainStyle.text}>Whatever your reason for visiting us, we are sure that you will very quickly appreciate the special atmosphere of The County Club.</Text>
        <Text style={mainStyle.text}>We are Guildford’s only private members’ club, well-managed and inclusive, proudly non-political,
          and always inviting, a welcoming and friendly place to meet in the heart of our beautiful town.
          Our reputation for providing first-class service guarantees your satisfaction, whether your
          requirement is for a private lunch, a catered board meeting, or a quiet drink with friends, our bars,
          lounges, and meeting rooms are at your disposal.</Text>
        <Text style={mainStyle.text}>Privileges of membership include access to exclusive events such as tastings, talks, events, and
          dinners, as well as the use of our meeting rooms and access to our affiliated private members’ clubs
          across the UK and around the world.</Text>
      </View>
    </ScrollView>
  );
}
