import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Header from '../component/Header';

const StatusScreen = ({route, navigation}) => {
    const { outcome } = route.params;
    const title = 'Upload Status'
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	  <Header title={title} />
          <Text>Status Screen</Text>
      <Text>Outcome: {JSON.stringify(outcome)}</Text>
      <Button
        title="Home"
      onPress={() => navigation.navigate('Primer')}
      />
    </View>
  );
};

export default StatusScreen;
