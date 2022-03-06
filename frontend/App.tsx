import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import { Button, withTheme } from 'react-native-paper';
import Leader from './Leaderboard';
import AboutUs from './AboutUs';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Vetering" >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Vetering" component={DummyScreen2} options={{
          title: '                     VETERING',
          headerStyle: {
            backgroundColor: '#253470',
       
          },
          headerTintColor: 'lightgrey',
          headerTitleStyle: {
            
            fontWeight: 'bold',
            fontSize: 25
          },
        }}
/>
        <Stack.Screen name="Leaderboard" component={Leader} />
        <Stack.Screen name="Our Team" component={AboutUs} />
        
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DummyScreen1 = () => {
  return (
    <View style={styles.container}>
      <Text>This is is is where the logo will go</Text>
      <StatusBar style="auto" />
      
    </View>
  );
};



const DummyScreen2 = ({ navigation }) => {
  return (

  
    <View style={styles.container}>


<Image style={styles.imgsize} source={require('../frontend/images/vetering.png')} />


      
<Text>{' '}</Text>
      <View style={{ flexDirection:"row" }}>
    <View>
    <Button style={styles.buttongrey}
        onPress={() => navigation.navigate('Profile')}
      >
      <Text style={styles.colors}>My Profile </Text>
   
      </Button >
    </View>
    <View><Text>     </Text></View>
    <View>
    <Button style={styles.buttongrey}
        onPress={() => navigation.navigate('Leaderboard')}
      >
      <Text style={styles.colors}>Leaderboard</Text>
      </Button>
    </View>
    </View>
    <Text>{' '}</Text>
    <View style={{ flexDirection:"row" }}>
    <View>
    <Button style={styles.buttongrey}
        onPress={() => navigation.navigate('Our Team')}
      >
      <Text style={styles.colors}>Our Team</Text>
      </Button>
    </View>
    <View><Text>     </Text></View>
    <View>
    <Button style={styles.buttongrey}
        onPress={() => navigation.navigate('Our Team')}
      >
      <Text style={styles.colors}>Tasks Board</Text>
      </Button>
    </View>
    </View>
      
      
      
      
      
    
      
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
  
    alignItems: 'center',
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 5,
    backgroundColor: '#253470'
    
    
  },
  imgsize: {
    width: 190,
    height: 400
  },
  colors: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
    
  }
});

