import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { getDeckByKey } from "../api";

export default class QuizScreen extends Component {
  state = {
    index: 0,
    cards: null,
    showingAnswer: false,
    correctQuestionsCount: 0
  }

  componentDidMount() {
    const deckKey = this.props.navigation.getParam("deckKey");
    getDeckByKey(deckKey).then(deck => this.setState({ cards: deck.cards }));
  }

  assertAnswer(isCorrect) {
    this.setState(prevState => ({
      index: prevState.index + 1,
      showingAnswer: false,
      correctQuestionsCount: isCorrect ? prevState.correctQuestionsCount + 1 : prevState.correctQuestionsCount
    }))
  }

  startQuizOver() {
    this.setState(prevState => ({
      index: 0,
      showingAnswer: false,
      correctQuestionsCount: 0
    }))
  }

  render() {
    const { cards, index, showingAnswer, correctQuestionsCount } = this.state;
    const { navigation } = this.props;

    if (cards === null) {
      return null;
    }

    const count = Object.values(cards).length;

    if (index + 1 > count) {
      return (
        <View style={styles.container}>
          <Text style={[styles.title, styles.finalText]}>
            You have answered {correctQuestionsCount} questions correctly!
          </Text>
          <TouchableOpacity
            style={[styles.smallButton, styles.bgWhite, styles.outline]}
            onPress={() => this.startQuizOver()}
          >
            <Text style={styles.textBlack}>Start Quiz Over</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, styles.bgWhite, styles.outline]}
            onPress={() => navigation.navigate('DeckScreen', { deckKey: navigation.getParam("deckKey") })}
          >
            <Text style={styles.textBlack}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const question = Object.values(cards)[index];

    return (
      <View style={styles.container}>
        <Text>{index + 1} / {count}</Text>
        <Text style={styles.title}>{question.question}</Text>
        {showingAnswer && (<Text style={styles.answer}>{question.answer}</Text>)}
        <TouchableOpacity
          style={[styles.smallButton, styles.bgWhite, styles.outline]}
          onPress={() => this.setState({ showingAnswer: true })}
        >
          <Text style={styles.textBlack}>Show Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgGreen, styles.outline]}
          onPress={() => this.assertAnswer(true)}
        >
          <Text style={styles.textWhite}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bgRed, styles.outline]}
          onPress={() => this.assertAnswer(false)}
        >
          <Text style={[styles.textWhite]}>Incorret</Text>
        </TouchableOpacity>
      </View>
    )
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
  answer: {
    fontSize: 15,
    marginBottom: 5
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 200,
    height: 50
  },
  smallButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: 100,
    height: 40
  },
  bgGreen: {
    backgroundColor: "green"
  },
  bgRed: {
    backgroundColor: "red"
  },
  outline: {
    borderWidth: 1,
    borderColor: "black"
  },
  textWhite: {
    color: "#fff",
    textAlign: "center"
  },
  textBlack: {
    color: "#000",
    textAlign: "center"
  },
  finalText: {
    color: '#f49b42'
  }
});