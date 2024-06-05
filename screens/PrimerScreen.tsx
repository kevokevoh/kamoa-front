import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Header from '../component/Header';

const PrimerScreen = ({navigation}) => {
    const title = 'Upload a 6 month M-Pesa Statement';
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	  <Header title={title} />
      <Text>Primer Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
  );
};

export default PrimerScreen;
