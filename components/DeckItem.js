import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class DeckItem extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={[styles.center, styles.container]}>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text>{deck.cards.length + ' ' + (deck.cards.lenght > 1 ? 'cards' : 'card')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 15,
  },
  center: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
})
