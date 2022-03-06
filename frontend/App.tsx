import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import { Button, withTheme } from 'react-native-paper';
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
      <Text>This is where the logo will go</Text>
      <StatusBar style="auto" />
      
    </View>
  );
};



const DummyScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is where logo will go</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Button style={styles.buttongrey}
        onPress={() => navigation.navigate('Profile')}
      >
      <Text style={styles.colors}>Profile</Text>
   
      </Button>
      <Button
        onPress={() => navigation.navigate('Leader')}
      >
      <Text style={styles.colors}>Leaderboard</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate('AboutUs')}
      >
      <Text style={styles.colors}>About Us</Text>
      </Button>

    
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttongrey: {
    width: 400,
    color: 'green'
    
  },
  colors: {
    color: 'black',
    fontSize: 30,
    
  }
});

