import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import store from './src/store';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const ReviewNavigator = createStackNavigator({
  Review: ReviewScreen,
  Settings: SettingsScreen
})

const MainNavigator = createBottomTabNavigator({
  Map: MapScreen,
  Deck: DeckScreen,
  Review: ReviewNavigator
})

const AuthNavigator = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
  Main: MainNavigator
})

const App = createAppContainer(AuthNavigator)

export default () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <App />
      </Provider>
    </>
  )
}