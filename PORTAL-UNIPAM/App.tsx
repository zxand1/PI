import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AuthPage from './src/AuthPage/AuthPage'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>O xandão é gay</Text>
      <Button title="Ir para Login" onPress={() => navigation.navigate('Login')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
