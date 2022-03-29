import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChatViewModel,
  HomeViewModel,
  LoginViewModel,
  RegisterViewModel,
  SplashViewModel,
} from '../ViewModels';
import CustomTab from './BottomTab';

type StackProps = {
  Splash: Function;
  Login: Function;
  Register: Function;
  Chat: Function;
  customTab: Function;
};

// const Stack = createStackNavigator<StackProps>();
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Customtab" component={CustomTab} />
        <Stack.Screen name="Home" component={HomeViewModel} />
        <Stack.Screen name="Splash" component={SplashViewModel} />
        <Stack.Screen name="Login" component={LoginViewModel} />
        <Stack.Screen name="Register" component={RegisterViewModel} />
        <Stack.Screen name="Chat" component={ChatViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
