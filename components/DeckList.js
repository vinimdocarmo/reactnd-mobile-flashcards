import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DeckItem from "./DeckItem";
import { FlatList } from "react-native-gesture-handler";
import DeckListEmpty from "./DeckListEmpty";

export default class DeckList extends Component {
  goToDeckPage() {
    console.log('go to deck page');
  }

  renderItem({ item }) {
    return (
      <DeckItem deck={item} onPress={() => this.goToDeckPage()} />
    );
  }

  render() {
    const { decks } = this.props;

    return (
      <View>
        <FlatList
          data={Object.values(decks || {})}
          renderItem={(obj) => this.renderItem(obj)}
          keyExtractor={item => item.key.toString()}
          ListEmptyComponent={() => <DeckListEmpty />}
        />
      </View>
    );
  }
}
