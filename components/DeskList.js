import React, { Component } from 'react'
import { View } from 'react-native'
import DeckItem from './DeckItem';

export default class DeckList extends Component {
  render() {
    const { decks } = this.props;

    return (
      <View>
        {decks.map((deck, i) => <DeckItem key={i} deck={deck} />)}
      </View>
    )
  }
}
