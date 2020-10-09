import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Messages from '../screens/messages';
import Header from '../components/shared/header';
import { Dimensions } from 'react-native';
// import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView";


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='TelePost' routeName = 'Home' />
      }
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={navigation.getParam('user')} routeName = 'Messages' />
        )
      }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    cardStyle: {
      width: Dimensions.get('window').width,
      overflow: 'hidden',
    },
    headerStyle: { 
      height: 80,
      borderBottomWidth: 2,
    },
    headerTitleContainerStyle: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
  }
});

export default createAppContainer(HomeStack);