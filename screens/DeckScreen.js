import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getDeckByKey } from "../api";

export default class DeckScreen extends React.Component {
  state = {
    deck: null
  };

  componentDidMount() {
    const deckKey = this.props.navigation.getParam("deckKey");
    getDeckByKey(deckKey).then(deck => this.setState({ deck }));
  }

  render() {
    const { deck } = this.state;

    if (deck === null) {
      return null;
    }

    const count = Object.values(deck.cards).length;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>{count + " " + (count > 1 ? "cards" : "card")}</Text>
        <TouchableOpacity
          style={[styles.button, styles.bgWhite, styles.outline]}
          onPress={() =>
            this.props.navigation.navigate("QuizScreen", {
              deckKey: deck.key
            })
          }
        >
          <Text style={styles.textBlack}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgBlack, styles.textWhite]}
          onPress={() =>
            this.props.navigation.navigate("NewQuestionScreen", {
              deckKey: deck.key
            })
          }
        >
          <Text style={styles.buttonText}>Add New Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 200,
    height: 50
  },
  bgWhite: {
    backgroundColor: "#fff"
  },
  bgBlack: {
    backgroundColor: "#000"
  },
  outline: {
    borderWidth: 1,
    borderColor: "#000"
  },
  textWhite: {
    color: "#fff",
    textAlign: "center"
  },
  textBlack: {
    color: "#000",
    textAlign: "center"
  },
  buttonText: {
    color: "#fff"
  }
});
