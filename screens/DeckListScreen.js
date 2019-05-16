import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import DeckList from "../components/DeckList";
import { getAllDecks } from "../api";
import { withNavigationFocus } from "react-navigation";

class DeckListScreen extends Component {
  state = { decks: {} };

  componentDidMount() {
    this.syncDeckList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.syncDeckList();
    }
  }

  syncDeckList() {
    getAllDecks().then(decks => this.setState({ decks }));
  }

  render() {
    const { decks } = this.state;

    return (
      <View style={styles.container}>
        <DeckList decks={decks} />
      </View>
    );
  }
}

export default withNavigationFocus(DeckListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
  }
});
