import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2024/03/CSU-Symbol-Demo-Shadow-768x913.jpg",
  };
  
  return (
    <View style={styles.container}>


      <Image style={styles.localCSULogo}
        source={require('assets\CSU-Symbol-r-357-RGB.png')} />

      <Image style={styles.urlCSULogo}
        source={{ uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2024/03/CSU-Symbol-Demo-Shadow-768x913.jpg" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },

  localCSULogo: {
    width: 55,
    height: 65
  },

  urlCSULogo: {
    height: 200,
    resizeMode: 'center'
  }
});
