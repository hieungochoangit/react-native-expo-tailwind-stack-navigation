import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MainStackParamList } from '~/navigators/main-stack';
import { RouteName } from '~/navigators/type';

import Config from 'react-native-config';
import { Logger } from '~/services/logger';

const logger = Logger.extend('MAIN');

interface MainScreenProps extends StackScreenProps<MainStackParamList, RouteName.MAIN_SCREEN> {}

export default function MainScreen({ route, navigation }: MainScreenProps) {
  logger.debug(Config);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-2xl m-2">Main Screen</Text>

      <Pressable
        onPress={() => navigation.navigate(RouteName.DETAIL_SCREEN)}
        className="w-[200] m-4 items-center border py-5 rounded-3xl bg-slate-200">
        <Text className="text-2xl">Go to Detail Screen</Text>
      </Pressable>
    </View>
  );
}
