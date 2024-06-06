import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import MultiMedia from '../component/MultiMedia';

const GrantPermissionScreen = ({navigation}) => {
    const title = 'Accept Permissions';
    const mediaImageUrl = require('../img/perms.png'); // TODO: Use absolute paths
    const mediaText = [
	{
	    title: 'Personal info',
	    content: 'We collect personal info to prevent fraud and also protect you from it. ie Phone number, email, name'
	},
	{
	    title: 'Approximate location',
	    content: 'We look at the approximate location to help us show you relevant infomation. '
	},
	{
	    title: 'App info and performance',
	    content: 'Our app runs in many devices and this help us optimise for every type of device.'
	},
    ];
    return (
	<View style={styles.mainView}>
	    <Header title={title} />
	    <ScrollView contentContainerStyle={styles.scrollViewContent}>
	    <MultiMedia mediaText={mediaText} mediaImageUrl={mediaImageUrl}/>
	    <Text style={styles.text}>Step 3/3</Text>
	    <Button
	color="#ECB64D"
	title="Agree & Continue"
	onPress={() => navigation.navigate('Status', { outcome: 'Success'})}
	    />
	    <Text
        style={styles.link}
        onPress={() => navigation.navigate('Status', { outcome: 'Failed'})}
            >
            Deny Access
        </Text>
	</ScrollView>            
	</View>
    );
};

const styles = StyleSheet.create({
    link: {
	textAlign: 'center',
	color: 'black',
	textDecorationLine: 'underline',
	marginTop: 10
	
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
	fontSize: 18,
	textAlign: 'center',
    },
});

export default GrantPermissionScreen;
