import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
	  <Image source={require('../img/logo.png')} style={styles.headerImage} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  headerImage: {
    width: 119,
    height: 40,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
