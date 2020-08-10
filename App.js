import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext' 
import { Provider as JobProvider } from './src/context/JobContext'

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

const TabNavigator = createBottomTabNavigator({
  Map: MapScreen,
  Deck: DeckScreen,
  Review: ReviewNavigator
})

const MainNavigator = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
  Main: TabNavigator
}, {
  defaultNavigationOptions: {
    tabBarVisible: false
  }
})

const App = createAppContainer(MainNavigator)

export default () => {
  return (
    <>
      <JobProvider>
        <AuthProvider>
          <StatusBar style="auto" />
          <App />
        </AuthProvider>
      </JobProvider>
    </>
  )
}