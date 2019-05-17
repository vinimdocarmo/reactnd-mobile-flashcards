import React, { Component } from "react";
import { View } from "react-native";
import DeckItem from "./DeckItem";
import { FlatList } from "react-native-gesture-handler";
import DeckListEmpty from "./DeckListEmpty";
import { withNavigation } from "react-navigation";

class DeckList extends Component {
  goToDeckPage(deckKey) {
    this.props.navigation.navigate("DeckScreen", { deckKey });
  }

  renderItem({ item }) {
    return <DeckItem deck={item} onPress={() => this.goToDeckPage(item.key)} />;
  }

  render() {
    const { decks } = this.props;

    return (
      <View>
        <FlatList
          data={Object.values(decks || {})}
          renderItem={obj => this.renderItem(obj)}
          keyExtractor={item => item.key.toString()}
          ListEmptyComponent={() => <DeckListEmpty />}
        />
      </View>
    );
  }
}

export default withNavigation(DeckList);
