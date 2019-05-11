import { createStackNavigator } from 'react-navigation';
import { Splash, Home, Login, SignUp, Calendar, Feed, News, User } from '../src/screens';
import MainTabbarScreen from './screens/MainTabbarScreen';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  Home: { screen: Home },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Calendar: { screen: Calendar },
  Feed: { screen: Feed },
  News: { screen: News },
  User: { screen: User },
  MainTabbarScreen: {
    screen: MainTabbarScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
},
  {
    headerMode: 'none',
  })
export default AppNavigator;