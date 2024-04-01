import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import { RouteName } from '../type';

import MainScreen from '~/screens/main';
import DetailScreen from '~/screens/detail';

export type MainStackParamList = {
  [RouteName.MAIN_SCREEN]: undefined;
  [RouteName.DETAIL_SCREEN]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={RouteName.MAIN_SCREEN}
        component={MainScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Main Screen',
        }}
      />
      <Stack.Screen
        name={RouteName.DETAIL_SCREEN}
        component={DetailScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Detail Screen',
        }}
      />
    </Stack.Navigator>
  );
}
