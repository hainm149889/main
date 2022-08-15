import {SCREENS} from '@configs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
  [SCREENS.LOGIN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
    </RootStack.Navigator>
  );
};
