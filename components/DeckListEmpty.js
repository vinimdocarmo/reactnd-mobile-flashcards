import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default function DeckListEmpty() {
  return (
    <View style={styles.container}><Text style={styles.text}>You have no deck yet 😕</Text></View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  }
}
