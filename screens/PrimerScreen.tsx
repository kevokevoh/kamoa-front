import * as React from 'react';
import { Button, View, Text } from 'react-native';

const PrimerScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Primer Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
  );
};

export default PrimerScreen;
