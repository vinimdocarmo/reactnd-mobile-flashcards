import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { addDeck, addQuestionToDeck } from "../api";

export default class NewQuestionScreen extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionChange(question) {
    this.setState({ question });
  }

  handleAnswerChange(answer) {
    this.setState({ answer });
  }

  async handleAddClick() {
    const { question, answer } = this.state;
    const deckKey = this.props.navigation.getParam("deckKey");

    await addQuestionToDeck({
      deckKey,
      question: { answer, question }
    });

    alert("Question created");

    this.props.navigation.navigate("DeckScreen", { deckKey });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>Question:</Text>
        <TextInput
          style={styles.input}
          value={this.state.question}
          onChangeText={this.handleQuestionChange.bind(this)}
        />
        <Text>Answer:</Text>
        <TextInput
          style={styles.input}
          value={this.state.answer}
          onChangeText={this.handleAnswerChange.bind(this)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAddClick.bind(this)}
        >
          <Text style={styles.buttonText}>Add Question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#163eb7",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 30,
    width: 100,
    height: 50
  },
  buttonText: {
    color: "#fff"
  }
});
