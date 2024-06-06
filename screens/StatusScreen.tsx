import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../component/Header';

const StatusScreen = ({route, navigation}) => {
    const { outcome } = route.params;
    const title = 'Upload Status'
    return (
	<View style={styles.mainView}>
	    <Header title={title} />
	    <ScrollView contentContainerStyle={styles.scrollViewContent}>
	    {outcome == 'Success' ? (
		<Text style={styles.text}>Your upload was Successful.</Text>
	    ) : (
		<Text style={styles.text}>You denied access to the uploaded file.</Text>
            )}
	    <Button
	color="#ECB64D"
	title="Home"
	onPress={() => navigation.navigate('Primer')}
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


export default StatusScreen;
