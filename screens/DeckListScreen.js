import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import DeskList from "../components/DeskList";

export default class DeckListScreen extends Component {
  render() {
    const decks = [
      { id: 1, title: "React", cardCount: 5 },
      { id: 2, title: "React Native", cardCount: 3 },
      { id: 3, title: "Vue.js", cardCount: 1 },
      { id: 4, title: "React", cardCount: 5 },
      { id: 5, title: "React Native", cardCount: 3 },
      { id: 6, title: "Vue.js", cardCount: 1 },
      { id: 7, title: "React", cardCount: 5 },
      { id: 8, title: "React Native", cardCount: 3 },
      { id: 9, title: "Vue.js", cardCount: 1 },
      { id: 10, title: "React", cardCount: 5 },
      { id: 11, title: "React Native", cardCount: 3 },
      { id: 12, title: "Vue.js", cardCount: 1 },
      { id: 13, title: "React", cardCount: 5 },
      { id: 14, title: "React Native", cardCount: 3 },
      { id: 15, title: "Vue.js", cardCount: 1 }
    ];
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
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
  }
});
