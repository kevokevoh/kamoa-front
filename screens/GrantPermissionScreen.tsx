import * as React from 'react';
import { Button, View, Text } from 'react-native';

const GrantPermissionScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Grant Permission Screen</Text>
      <Button
        title="Agree & Continue - Success"
      onPress={() => navigation.navigate('Status', { outcome: 'Success'})}
          />
          <Button
        title="Agree & Continue - Fail"
      onPress={() => navigation.navigate('Status', { outcome: 'Failed'})}
      />
    </View>
  );
};

export default GrantPermissionScreen;
