
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyBanner from './components/Banner';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const Stack = createStackNavigator();


export default function Leader() {
  return (
    <View>
    <Text>{' '}</Text>
    <Text style={styles.profiletxt}>Group</Text> 
    <Text>{' '}</Text>
    <Text style={styles.profiledesc}>$2500 Scholarship for the leading organziation!
      </Text>
    <Text style={styles.profilebio}>Organization                Hours</Text>
    <Text>{' '}</Text>
    <Text style={styles.profilebio}>Cal Poly Dance Team       60</Text>
    <Text style={styles.profilebio}>Theta Chi Fraternity         54</Text>
    <Text style={styles.profilebio}>Sales Engineering Club   49</Text>
    <Text style={styles.profilebio}>Engineering Society         34</Text>
    <Text style={styles.profilebio}>Cal Poly Wrestling            21</Text>
    <Text>{' '}</Text>
    <Text style={styles.profiletxt}>Individual</Text> 
    <Text>{' '}</Text>
    <Text style={styles.profiledesc}>$500 Amazon gift card for the leading individual!
      </Text>
    <Text style={styles.profilebio}>Name                           Hours</Text>
    <Text>{' '}</Text>
    <Text style={styles.profilebio}>Michael Cassetti          22</Text>
    <Text style={styles.profilebio}>Jack Nelson                  18</Text>
    <Text style={styles.profilebio}>Izzy Razmi                    14</Text>
    <Text style={styles.profilebio}>Clint Staley                   13</Text>
    <Text style={styles.profilebio}>Shehbaj Dhillon            11</Text>
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
