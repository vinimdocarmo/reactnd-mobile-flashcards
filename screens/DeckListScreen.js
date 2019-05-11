import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DeskList from '../components/DeskList';

export default class DeckListScreen extends Component {
  render() {
    const decks = [
      { title: "React", cardCount: 5 },
      { title: "React Native", cardCount: 3 },
      { title: "Vue.js", cardCount: 1 },
    ]
    return (
      <View style={styles.container}>
        <DeskList decks={decks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  }
});
