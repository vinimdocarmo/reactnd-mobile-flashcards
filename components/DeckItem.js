import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class DeckItem extends Component {
  render() {
    const { deck } = this.props;
    const count = Object.values(deck.cards).length;

    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={[styles.center, styles.container]}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text>{count + " " + (count > 1 ? "cards" : "card")}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d6d7da",
    marginBottom: 15
  },
  center: {
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});
