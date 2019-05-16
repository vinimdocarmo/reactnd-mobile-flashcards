import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import DeckItem from "./DeckItem";
import { FlatList } from "react-native-gesture-handler";

export default class DeckList extends Component {
  goToDeckPage() {
    alert("go to deck page");
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={this.goToDeckPage}>
        <DeckItem deck={item} />
      </TouchableOpacity>
    );
  }

  render() {
    const { decks } = this.props;

    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
