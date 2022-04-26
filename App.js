import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Video from './src/screens/video';
import Movies from './src/screens/Movies';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="video" component={Video}/>
        <Stack.Screen name="Movies" component={Movies}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App