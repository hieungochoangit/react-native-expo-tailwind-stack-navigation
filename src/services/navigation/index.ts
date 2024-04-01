import { CommonActions, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

import { RouteName } from '~/navigators/type';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (routeName: RouteName, params?: any) => {
  navigationRef?.current?.navigate({ name: routeName as string, params });
};

export const reset = (routeName: RouteName) =>
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName }],
    })
  );
