import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Header from '../component/Header';

const UploadStatementScreen = ({navigation}) => {
    const [inputValue, setInputValue] = useState('');
    const title = 'How to Upload your M-Pesa Statement';
    const uploadInstructions = [
	'Dial *334#',
	'Select 7 - My Account',
	'Select 3 - M-PESA Statement',
	'Select 1 - M-PESA Statement',
	'Select 1 - Request Statement',
	'Select 1 - Full Statement',
	'Select 4 - 6 Months Statement',
	'Select 1 - Enter e-mail address',
	'Enter your M-PESA Pin to receive your statement',
    ];
    return (
	<View style={styles.mainView}>
	    <Header title={title} />
	    <ScrollView contentContainerStyle={styles.scrollViewContent}>
	    <View style={styles.list}>
	    {uploadInstructions.map((item, index) => (
		<View key={index} style={styles.listItem}>
		    <Text style={styles.bullet}>{'\u2022'}</Text>
		    <Text style={styles.text}>{item}</Text>
		    </View>
	    ))}
	    <View style={styles.uploader}>
	    <Text style={styles.headerText}>Upload M-pesa Statement</Text>
	    <Text style={styles.textUpload}>Select the M-Pesa statement from your phone.</Text>
	    <View style={styles.buttonContainer}>
	    <Button
		color="#ECB64D"
		title="Select" />
	    </View>
	    </View>
	    <Text style={styles.codeText}>Enter the code you received.</Text>
	    <TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={setInputValue}
		placeholder="243456"
	    />
	    </View>
	    <Text style={styles.stepText}>Step 2/3</Text>
	    <Button
		color="#ECB64D"
		title="Upload M-Pesa Statement"
		onPress={() => navigation.navigate('Permission')}
	    />    
	    </ScrollView>
	    </View>
    );
};

const styles = StyleSheet.create({ // TODO: A lot of repetitive css inheritance needed
    stepText: {
	fontSize:18,
	textAlign: 'center'
    },
    codeText: {
	paddingTop:10,
	fontWeight: 'bold',
    },
    buttonContainer: {
	width: 100,
    },
    headerText: {
	fontSize: 14,
	textAlign: 'center',
	fontWeight: 'bold',
	paddingBottom:5
    },
    textUpload: {
	fontSize: 14,
	textAlign: 'center',
	paddingBottom:10
    },
    uploader: {
	backgroundColor: '#FBFBFB',
	padding: 10,
	borderRadius: 15,
	borderWidth: 1, 
	borderColor: '#D1D1D1',
	marginTop:10,
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1

    },
    list: {
	backgroundColor: '#ffffff',
	padding: 10,
	borderRadius: 15,
	borderWidth: 1, 
	borderColor: '#ECB64d',
	marginBottom: 10
    },
    listItem: {
	flexDirection: 'row',
	alignItems: 'flex-start',
	marginBottom: 5,
    },
    bullet: {
	fontSize: 20,
	lineHeight: 20,
	marginRight: 10,
    },
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
	fontSize: 14,
	textAlign: 'center',
    },
});

export default UploadStatementScreen;
