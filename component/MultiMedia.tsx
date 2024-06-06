import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Divider from './Divider';


const MultiMedia = ({mediaText, mediaImageUrl}) => {
    return (
	<View style={styles.multiMediaContainer}>
	    <Image source={mediaImageUrl} style={styles.mediaImage}/>
	       {mediaText.map((item, index) => (
		 <View key={index}>
		       <Text style={styles.itemTitle}>{item.title}</Text>
		       <Text style={styles.itemContent}>{item.content}</Text>
		       {index < mediaText.length - 1 && <Divider />}
		 </View>
	       ))}
	</View>
    );
};

const styles = StyleSheet.create({
    mediaImage: {
	width: 235,
	height: 178,
	marginBottom: 10,
    },
    multiMediaContainer: {
	width: '100%',
	padding: 20,
	alignItems: 'center',
	justifyContent: 'center',
    },
    itemTitle: {
	fontSize: 16,
	fontWeight: 'bold',
	paddingBottom: 10
    },
    itemContent: {
	fontSize: 16,
	paddingBottom: 10
    },
});

export default MultiMedia;
