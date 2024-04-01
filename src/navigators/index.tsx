import { NavigationContainer, CommonActions } from '@react-navigation/native';
import React, { useCallback } from 'react';

import RootStack from './root-stack';
import { RouteName } from './type';

import { navigationRef } from '~/services/navigation';
import { useAppSelector } from '~/store';
import { selectToken } from '~/store/auth';

export default function Navigation() {
  // TODO: check token exist
  const token = useAppSelector((state) => selectToken(state));

  const onReady = useCallback(() => {
    if (!token) {
      navigationRef.current?.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: RouteName.MAIN_STACK }],
        })
      );
    }
  }, [token]);

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <RootStack />
    </NavigationContainer>
  );
}
