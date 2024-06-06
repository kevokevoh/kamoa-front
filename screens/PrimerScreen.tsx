import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../component/Header';
import MultiMedia from '../component/MultiMedia';

const PrimerScreen = ({navigation}) => {
    // TODO: Add a redux store to store these statics??
    const title = 'Upload a 6 month M-Pesa Statement';
    const mediaImageUrl = require('../img/primer.png'); // TODO: Use absolute paths
    const mediaText = [
	{
	    title: 'Unlock the power of Kamoa with your M-Pesa',
	    content: 'Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement'
	},
	{
	    title: 'Get insights on your spending habits',
	    content: 'Kamoa helps you understand your spending  and track your finances every time you upload a statement'
	},
	{
	    title: 'Secure a higher loan limit',
	    content: 'Users that share more information get access to higher loan limits with flexible payments and low interest rates'
	},
    ];
    return (
	<View style={styles.mainView}>
	    <Header title={title}/>
	    <ScrollView contentContainerStyle={styles.scrollViewContent}>
	    <MultiMedia mediaText={mediaText} mediaImageUrl={mediaImageUrl}/>
		<Text style={styles.text}>Step 1/3</Text>
	        <Button
	           color="#ECB64D"
		   title="Next"
		   onPress={() => navigation.navigate('Upload')}
		/>
	    </ScrollView>
	</View>
    );
};

const styles = StyleSheet.create({
    mainView: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#fff9ee'
    },
    scrollViewContent: {
	padding: 20,
    },
    text: {
	fontSize: 18,
	textAlign: 'center',
    },
});

export default PrimerScreen;
