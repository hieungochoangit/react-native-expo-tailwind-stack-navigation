import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import { RouteName } from '../type';

import LoginScreen from '~/screens/login';

export type AuthStackParamList = {
  [RouteName.LOGIN_SCREEN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
