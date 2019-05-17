import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { addDeck } from "../api";

export default class NewDeckScreen extends React.Component {
  state = {
    title: ""
  };

  handleTitleChange(title) {
    this.setState({ title });
  }

  async handleAddClick() {
    const createdDeck = await addDeck({ title: this.state.title });
    alert("New deck created! ");
    this.props.navigation.navigate("DeckScreen", { deckKey: createdDeck.key });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.label}>What is the title of your new desk?</Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTitleChange.bind(this)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAddClick.bind(this)}
        >
          <Text style={styles.buttonText}>Add Desk</Text>
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
  label: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20
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
