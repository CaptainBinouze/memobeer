import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CollectionScreen from '../screens/CollectionScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add${focused ? '' : '-outline'}` : 'md-add'}
    />
  ),
};

const CollectionStack = createStackNavigator({
  Collection: CollectionScreen,
});

CollectionStack.navigationOptions = {
  tabBarLabel: 'Collection',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-beer${focused ? '' : '-outline'}` : 'md-beer'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    CollectionStack,
  },
  {
    tabBarOptions: {
        style: {
          backgroundColor: '#ffffff',
        },
        showLabel: false,
    },
  }
);
