import React, { useEffect } from 'react';
import { Appearance, ImageBackground, StatusBar } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export const Router = () => {
  const routeNameRef = React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();
  const navigationRef = React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>();
  const {token} = useSelector(state => state.user);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const nav: any = navigationRef.current;
        routeNameRef.current = nav?.getCurrentRoute()?.name;
      }}
    >
      <StatusBar
        animated={true}
        // translucent
        barStyle="dark-content"
      />
      {!token && <AuthStack />}
      {token && <AppStack />}
    </NavigationContainer>
  );
};
