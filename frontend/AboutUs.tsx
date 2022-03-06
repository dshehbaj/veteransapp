import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import MyComponent from './components/Button';
import MyBanner from './components/Banner';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MyAvatar from './components/Avatar';
import MySD from './components/SD';
import MyMC from './components/MC';
import MyJN from './components/JN';
import { ScrollView } from 'react-native-gesture-handler';
export default function AboutUs() {
  return (
    
    <ScrollView style={styles.bg}>
      <Text>{' '}</Text>
      <Text style={styles.profiletxt}>Our Mission</Text>
      <Text style={styles.profiledesc}>Our mission is to connect volunteers in our local community to veterans in need of help. From helping around the house like mowing lawns and moving to navigate the complex VA processes, NAMELIX will pair veterans with volunteers who are specialized to help in that area. 
        NAMELIX gives volunteers a platform to make an impactful difference for SLO Veterans and fulfilled service hours along the way.</Text>
        <Text>{' '}</Text>
      <Text style={styles.profiletxt}>Our Team</Text>
      <Text style={styles.profiledesc}>We are a group of Cal Poly Student Computer Science students and are excited to participate in Camp Polyhacks 2022!</Text>
      <Text>{' '}</Text>
      <Text style={styles.profiletxt}>Shehbaj Dhillon</Text>
      <MySD/>
      <Text style={styles.profiledesc}>3rd Year Computer Science Major (Builder)</Text>
        <Text>{' '}</Text>
      <Text style={styles.profiletxt}>Jack Nelson</Text>
      <MyJN/>
      <Text style={styles.profiledesc}>3rd Year Computer Science Major (Designer)</Text>
        <Text>{' '}</Text>
      <Text style={styles.profiletxt}>Michael Cassetti</Text>
        <Text>{' '}</Text>
      <MyMC/>
      <Text style={styles.profiledesc}>3rd Year Indurstial Engineering Major (Advocater)</Text>
  
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    bg: {
      textAlign: 'center',
      backgroundColor:'lightgrey'
  
    }
    ,
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profiletxt: {
      flex: 1,
      fontSize: 30,
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
      textAlign: 'center'
    }
  });
