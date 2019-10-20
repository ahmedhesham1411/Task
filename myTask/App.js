import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login,navigationOptions:  {
    header: null
} },
SettingScreen: { screen: Home ,navigationOptions:  {
    header: null
}},
});
const App = createAppContainer(AppNavigator);
export default App;
