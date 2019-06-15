import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code



const Education = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      This is my Education
        </Text>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#eeeeee',
  },
});

export default Education;