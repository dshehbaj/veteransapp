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
import TaskCard from './components/TaskComponent';
import React, { useState, useEffect } from 'react';
import getListings from './utils/getListings';

export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getL = async () => {
      const listings = await getListings();
      setTasks(listings.Items);
    }
    getL();
  });

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
      {tasks.map((t) => {
          return <TaskCard {...t}/>
        })}
      <Card>
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

