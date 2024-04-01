import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuthStack from '../auth-stack';
import MainStack from '../main-stack';
import { RouteName } from '../type';

export type RootStackParamList = {
  [RouteName.AUTH_STACK]: undefined;
  [RouteName.MAIN_STACK]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouteName.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={RouteName.MAIN_STACK} component={MainStack} />
    </Stack.Navigator>
  );
}
