import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
  width: 128,
  height: 128

}

export default MyScrollViewApp = () => (



  <ScrollView style={{ padding: 40 }}>
    <Text style={{ fontSize: 40 }}>Try to scroll down</Text>
    <Image source={require('./assets/Golden-Retriever-Puppy.jpg')} style={{
      width: 128,
      height: 128
    }} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />

    <Text style={{ fontSize: 40 }}>Try to scroll down again</Text>

    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />

    <Text style={{ fontSize: 40 }}>Try to scroll down again</Text>

    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
  </ScrollView>
);



