import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChatViewModel,
  LoginViewModel,
  RegisterViewModel,
  SplashViewModel,
} from '../ViewModels';

type StackProps={
  Splash : Function;
  Login:Function;
  Register: Function;
  Chat:Function;
}

const Stack = createStackNavigator<StackProps>();

const StackNav=()=> {
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
        <Stack.Screen name="Chat" component={ChatViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
