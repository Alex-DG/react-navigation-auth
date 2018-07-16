import React from 'react';
// import { string } from 'prop-types';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { FontAwesome } from 'react-native-vector-icons';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

// function renderTabIcon(tintColor) {
//   return <FontAwesome name="user" size={30} color={tintColor} />;
// }

const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
      headerStyle
    }
  }
});

const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home'
        // tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={30} color={tintColor} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile'
        // tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

const createRootNavigator = (signedIn = false) => createSwitchNavigator(
  {
    SignedIn: {
      screen: SignedIn
    },
    SignedOut: {
      screen: SignedOut
    }
  },
  {
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  }
);

export {
  SignedIn, SignedOut, createRootNavigator
};
