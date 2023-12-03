import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  colors: {
    backgroundColor: '#22382C',
    secondary: '#A7882E',
  },
  view: {
    flex: 1, backgroundColor: '#22382C'
  },
  headerText: {
    color: '#A7882E',
    fontWeight: "300",
    fontSize: 28,
    padding: 10
  },
  text: {
    color: 'white',
    padding: 10,
    fontSize: 24
  },
  coverText: {
    color: 'white',
    fontSize: 48
  },
  header: {
    backgroundColor: '#22382C',
  },
  headerTintColor: {
    color: 'white'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
  memberCardContainer: {
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: 360,
    height: 200,
    backgroundColor: '#22382C',
  },
  cardImage: {
    width: 125,
    height: 125,
    alignSelf: 'center',
  },
  cardName: {
    color: '#A7882E',
    fontSize: 24,
  },
  cardBalance: {
    color: '#A7882E',
    fontSize: 24,
    paddingBottom: 20,
  },
  cardHistory: {
    color: '#A7882E',
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
    paddingBottom: 5,
  },
  cardMember: {
    color: '#A7882E',
    fontSize: 16,
    alignSelf: 'flex-end'
  },
  divider: {
    justifyContent: 'flex-start',
    width: 300,
    height: 1,
    borderBottomColor: '#A7882E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0.1 },
    shadowRadius: 0.1,
    elevation: 2,
  }
});
