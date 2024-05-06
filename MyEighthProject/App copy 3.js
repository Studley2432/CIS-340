import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

    return (
    <View style={styles.container}>
      <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--Z26xgfFpy5a_iVkccdSLQV3GTMvxtVl8Vsjo4u8dQ&s"}}
      style={styles.logo} />

      <Text style={styles.insts}>Press the button below to select an image on your phone!</Text>
    
    <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
   
      <text style={styles.buttonText}>Pick Image</text>

    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  button: {
    borderRadius: 5,
    backgroundColor: "#778899",
    padding: 10
  },
  insts: {
    fontSize: 18,
    color: "87CEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },
  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "fff"
  }

});
