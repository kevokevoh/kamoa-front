import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Header from '../component/Header';

const UploadStatementScreen = ({navigation}) => {
    const title = 'How to Upload your M-Pesa Statement';
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	  <Header title={title} />
      <Text>Upload Statement Screen</Text>
      <Button
        title="Upload M-Pesa Statement"
        onPress={() => navigation.navigate('Permission')}
      />
    </View>
  );
};

export default UploadStatementScreen;
