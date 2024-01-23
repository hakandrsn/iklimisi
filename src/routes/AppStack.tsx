import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from '../core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Provider theme={theme}>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="appStack" component={AppStack} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </Provider>
  );
}
