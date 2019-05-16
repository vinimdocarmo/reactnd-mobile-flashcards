import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class DeckScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Deck view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
