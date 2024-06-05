import * as React from 'react';
import { Button, View, Text } from 'react-native';

const StatusScreen = ({route, navigation}) => {
    const { outcome } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
