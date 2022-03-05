import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import MyComponent from './components/Button';
import MyBanner from './components/Banner';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MyAvatar from './components/Avatar';
export default function AboutUs() {
  return (
    
    <View>
      
      <MyBanner/>
      <Text style={styles.bg}>Our Mission</Text>
      <Text style={styles.bg}>Our Team</Text>
      <Text style={styles.bg}>Shehbaj Dhillon</Text>
      <MyAvatar/>
      <Text style={styles.bg}>Jack Nelson</Text>
      <MyAvatar/>
      <Text style={styles.bg}>Michael Cassetti</Text>
      <MyAvatar/>
  
      <StatusBar style="auto" />
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
});
