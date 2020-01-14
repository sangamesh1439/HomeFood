/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
console.disableYellowBox = true;
import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigator} from './src/navigation';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';


export const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>

      <RootNavigator />
      <SafeAreaView />
      </ApplicationProvider>
  );
};
