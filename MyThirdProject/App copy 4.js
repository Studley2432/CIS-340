import React from 'react';
import { Text, View, FlatList } from 'react-native';

const dog = {
  uri: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
  width: 128,
  height: 128

}

export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop:22}}>
      <FlatList
      data={[
        {key: 'Alabama'},
        {key: 'Alaska'},
        {key: 'Arkansas'},
        {key: 'California'},
        {key: 'Colorado'},
        {key: 'Delaware'},
        {key: 'Florida'},
        {key: 'Georgia'},
        {key: 'Hawaii'},
        {key: 'Idaho'},
        {key: 'Illinois'},
        {key: 'Indiana'},
        {key: 'Iowa'},
        {key: 'Kentucky'},
        {key: 'Maine'},
        {key: 'Maryland'},
        {key: 'Massachusetts'},
        {key: 'Michigan'},
        {key: 'Minnesota'},
        {key: 'Mississippi'},
        {key: 'Utah'},
      ]}

      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key}</Text> }

      />
    </View>
);
}






