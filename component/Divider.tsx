import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
	borderBottomColor: 'black',
	borderBottomWidth: StyleSheet.hairlineWidth,
	marginBottom: 10
    },
});

export default Divider;
