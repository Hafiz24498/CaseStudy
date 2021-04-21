
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
 <Text style={styles.header}>Welcome to Venue Registration System</Text>
 <Text style={styles.contents}>Register your desired venues on VenuesScreen page </Text>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ff99cc',
  },
  header: {
  fontSize: 50,
  textAlign: 'center',
  margin: 10,
  },
  contents: {
  fontSize: 20,
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
  }
  });