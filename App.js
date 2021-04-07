import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput styles={styles.input} placeholder="Add new Goal"/>
        <Button title="Add"/>
      </View>

      <View>
    
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  screen:{
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
