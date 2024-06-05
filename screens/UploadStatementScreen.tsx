import * as React from 'react';
import { Button, View, Text } from 'react-native';

const UploadStatementScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Upload Statement Screen</Text>
      <Button
        title="Upload M-Pesa Statement"
        onPress={() => navigation.navigate('Permission')}
      />
    </View>
  );
};

export default UploadStatementScreen;
