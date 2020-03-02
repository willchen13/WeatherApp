import React from 'react';
import Header from './components/Header';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.header}>
      <Header title="Weather App"/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;