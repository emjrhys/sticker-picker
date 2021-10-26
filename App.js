import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to <Text style={{color: '#FF9F1C'}}>drinkly</Text></Text>

      <TouchableOpacity onPress={() => alert('hello world')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#2EC4B6',
    fontSize: 24,
    fontWeight: 700,
    marginTop: 16
  },
  button: {
    backgroundColor: '#2EC4B6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 32,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
})
