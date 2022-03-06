import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import MyComponent from './components/Button';
import MyBanner from './components/Banner';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MyAvatar from './components/Avatar';
import MyMC from './components/MC';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Title } from 'react-native-paper';
import React from 'react';

export default function Tasks() {
  return (
    
    <ScrollView style={{backgroundColor: 'lightgrey'}}>
        <View
            style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 50,
                backgroundColor: 'white'
                
            }}>
      <Text style={styles.profiletxt}>Featured Tasks</Text> 
      <Text>{' '}</Text>
      </View>
      <Card>
    <Card.Content>
      <Title>Task 1</Title>
    </Card.Content>
    <Text>{' '}</Text>
    <Card.Content>
      <Title>Task 2</Title>
    </Card.Content>
    <Text>{' '}</Text>
    <Card.Content>
      <Title>Task 3</Title>
    </Card.Content>
    <Text>{' '}</Text>
    <Card.Content>
      <Title>Task 4</Title>
    </Card.Content>
    <Text>{' '}</Text>
    <Card.Content>
      <Title>Task 5</Title>
    </Card.Content>
    <Text>{' '}</Text>
    </Card>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
    bg: {
      
      backgroundColor: 'lightgrey'
      
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
  