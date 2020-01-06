import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {TestComponent} from './../components/AppComponents';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text> dude </Text>
      <TestComponent />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
