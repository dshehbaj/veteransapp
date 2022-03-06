
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyBanner from './components/Banner';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import Leader from './Leaderboard';
import AboutUs from './AboutUs';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View>
      <Profile/>
    </View>
    
  );
}



const styles = StyleSheet.create({
  bg: {
    
    textAlign:'center'
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiletxt: {
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilebio: {
    fontSize: 20,
    right: -50,
    fontWeight: 'bold'
  },
  profiledesc: {
    fontSize: 16,
    right: -12
  }
});
