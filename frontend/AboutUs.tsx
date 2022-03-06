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
      <View
  style={{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: 'white'
    
  }}>
      <Text style={styles.profiletxt}>Shehbaj Dhillon</Text>
      </View>
      <MySD/>
      <Text style={styles.profiledesc}>3rd Year Computer Science Major (Builder)</Text>
        <Text>{' '}</Text>
        <View
  style={{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: 'white'
    
  }}>
      <Text style={styles.profiletxt}>Jack Nelson</Text>
      </View>
      <MyJN/>
      <Text style={styles.profiledesc}>3rd Year Computer Science Major (Designer)</Text>
        <Text>{' '}</Text>

        <View
  style={{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: 'white'
    
  }}>
      <Text style={styles.profiletxt}>Michael Cassetti</Text>
      </View>
      <MyMC/>
      <Text style={styles.profiledesc}>3rd Year Indurstial Engineering Major (Advocater)</Text>
  
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    bg: {
      textAlign: 'center',
      backgroundColor:'darkgrey'
  
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
      fontWeight: 'bold'
      
      
      
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
