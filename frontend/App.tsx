
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';


const Stack = createStackNavigator();

const Dummy = () => {
  return (
    <View>

    </View>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <View>
      <Stack.Navigator initialRouteName="AboutUs">
        <Stack.Screen name="AboutUs" component={Dummy}/>  
      </Stack.Navigator>
      </View>
    </NavigationContainer>
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
