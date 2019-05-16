import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import LinksScreen from "../screens/LinksScreen";
import DeckListScreen from "../screens/DeckListScreen";
import NewDeckListScreen from "../screens/NewDeckListScreen";

const DeckStack = createStackNavigator({
  Deck: DeckListScreen
});

DeckStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`cards${focused ? "" : "-outline"}`} />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckListScreen
});

NewDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-add-circle${focused ? "" : "-outline"}`}
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-link"} />
  )
};

export default createBottomTabNavigator({
  DeckStack,
  NewDeckStack,
  LinksStack
});
