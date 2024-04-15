import React, { useState } from 'react';
import { Button, Text, Image } from 'react-native';

export default function catApp() {
  let pic = {
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmed.stanford.edu%2Fnews%2Fall-news%2F2021%2F09%2Fcat-fur-color-patterns.html&psig=AOvVaw3a0IrRT4K6g1kxk-xEjfl6&ust=1713232555079000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj5r-KOw4UDFQAAAAAdAAAAABAE'
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
        style={{ width: 200, height: 200 }} />
      <Text>
        This is my cat</Text>

    </View>
  );
}

