import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {DropdownMessageHolder, NavigationUtils} from '@helpers';
import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DropdownAlert from 'react-native-dropdownalert';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.content}>
        <StatusBar />
        <NavigationContainer ref={NavigationUtils.navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </View>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            DropdownMessageHolder.setDropDown(ref);
          }
        }}
        closeInterval={2000}
        updateStatusBar={Platform.OS === 'ios'}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default App;
