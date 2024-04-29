import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.yellow}>Some Yellow Text</Text>
      <Text style= {styles.largeGreen}>Big green text</Text>
      <Text style= {[styles.yellow, styles.largeGreen]}>Some Yellow Text, then big green text</Text>
      <Text style= {[styles.largeGreen, styles.yellow]}>Some big green text, then some yellow text</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60
  },

  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30
  },

  yellow: {
    color: 'yellow',
    fontSize: 20
  },
});
