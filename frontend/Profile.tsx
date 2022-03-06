import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import MyComponent from './components/Button';
import MyBanner from './components/Banner';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MyAvatar from './components/Avatar';
import MyMC from './components/MC';
export default function Profile() {
  return (
    
    <View style={styles.bg}>
      <Text>{' '}</Text>
      <MyMC/>
      <View
  style={{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: 'white'
    
  }}>
      <Text style={styles.profiletxt}>Michael Cassetti</Text> 
      </View>
      <Text style={styles.profilebio}>Affiliation: Sales Engineering Club</Text>
      <Text style={styles.profilebio}>Location: SLO</Text>
      <Text style={styles.profilebio}>Hours Served: 22</Text>
      <Text>{' '}</Text>
      <Text style={styles.profiledesc}>Hi my name is Michael and I am a 3rd year IME major. 
      Feel free to reach out to me with any tasks you have! I enjoy fishing, surfing, and also play hockey in my free time.
      </Text>
      <Text>{' '}</Text>
      <Text style={styles.profilebio}>Reviews (2)</Text>
      <Text>{' '}</Text>
      <Text style={styles.profiledesc}>Robert: Michael was an excellent volunteer. 
      He walked my dog for 2 weeks and was always on time.
      Would highly recommend!</Text>
      <Text>{' '}</Text>
      <Text style={styles.profiledesc}>Jessica: Michael mowed my lawn a couple times and was very excited I joined the platform. 
      Five stars for Michael!</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
    </View>
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
  