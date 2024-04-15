import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey my name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340</Text>
      <Student name="Jacob Dudley" />
      <Student name="Second Name" />
      <Student name="Third Name" />
      <Student name="Fourth Name" />
    </View>
  );
}