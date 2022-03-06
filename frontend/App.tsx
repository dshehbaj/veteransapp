import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import { Button } from 'react-native-paper';
import Leader from './Leaderboard';
import AboutUs from './AboutUs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Dummy2">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dummy2" component={DummyScreen2} />
        <Stack.Screen name="Leader" component={Leader} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
    
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DummyScreen1 = () => {
  return (
    <View style={styles.container}>
      <Text>This is Dummy Screen 1</Text>
      <StatusBar style="auto" />
      
    </View>
  );
};



const DummyScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Dummy Screen 2</Text>
      <Button
  
        onPress={() => navigation.navigate('Profile')}
      >
      Profile
      </Button>
      <Button
  
        onPress={() => navigation.navigate('Leader')}
      >
      Leaderboard
      </Button>
      <Button
  
        onPress={() => navigation.navigate('AboutUs')}
      >
      Our Team
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

