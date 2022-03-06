import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Dummy2">
        <Stack.Screen name="Dummy1" component={DummyScreen1} />
        <Stack.Screen name="Dummy2" component={DummyScreen2} />
    
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

const DummyScreen2 = () => {
  return (
    <View style={styles.container}>
      <Text>This is Dummy Screen 2</Text>
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

