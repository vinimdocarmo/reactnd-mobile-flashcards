import { AsyncStorage } from "react-native";
import { DECK_LIST_KEY } from "./constants/StorageKeys";
import uuid from "uuid/v1";

export async function getAllDecks() {
  return JSON.parse(await AsyncStorage.getItem(DECK_LIST_KEY));
}

export async function getDeckByKey(key) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_LIST_KEY));
  return decks[key] || null;
}

export async function addDeck(entry) {
  const key = uuid();
  const newDeck = Object.assign({}, entry, { key, cards: {} });
  const deckList = await AsyncStorage.getItem(DECK_LIST_KEY);

  if (deckList === null) {
    await AsyncStorage.setItem(DECK_LIST_KEY, JSON.stringify({}));
  }

  await AsyncStorage.mergeItem(
    DECK_LIST_KEY,
    JSON.stringify({ [key]: newDeck })
  );

  return newDeck;
}

export async function addQuestionToDeck({ deckKey, question }) {
  const decks = JSON.parse(await AsyncStorage.getItem(DECK_LIST_KEY));
  const newQuestion = Object.assign({}, question, { key: uuid() });

  if (decks === null) {
    throw new Error("deck list object was not initialized");
  }

  const deck = decks[deckKey];
  const updatedDeck = Object.assign({}, deck, {
    cards: {
      ...deck.cards,
      [newQuestion.key]: newQuestion
    }
  });

  await AsyncStorage.mergeItem(
    DECK_LIST_KEY,
    JSON.stringify({ [updatedDeck.key]: updatedDeck })
  );

  return newQuestion;
}
