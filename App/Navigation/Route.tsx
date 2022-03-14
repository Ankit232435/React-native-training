import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChatVIewModel,
  LoginViewModel,
  RegisterViewModel,
  SplashViewModel,
} from '../ViewModel';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashViewModel} />
        <Stack.Screen name="Login" component={LoginViewModel} />
        <Stack.Screen name="Register" component={RegisterViewModel} />
        <Stack.Screen name="Chat" component={ChatVIewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
