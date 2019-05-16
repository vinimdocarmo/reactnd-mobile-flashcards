import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import LinksScreen from "../screens/LinksScreen";
import DeckListScreen from "../screens/DeckListScreen";
import NewDeckScreen from "../screens/NewDeckScreen";

const DeckListStack = createStackNavigator({ DeckListScreen });

DeckListStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`cards${focused ? "" : "-outline"}`} />
  )
};

const NewDeckStack = createStackNavigator({ NewDeckScreen });

NewDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-add-circle${focused ? "" : "-outline"}`}
    />
  )
};

export default createBottomTabNavigator({
  DeckListStack,
  NewDeckStack
});
