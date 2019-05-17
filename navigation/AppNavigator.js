import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  TouchableOpacity,
  HeaderBackButton
} from "react-navigation";
import DeckScreen from "../screens/DeckScreen";
import { Ionicons } from "@expo/vector-icons";

import MainTabNavigator from "./MainTabNavigator";
import NewQuestionScreen from "../screens/NewQuestionScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Deck: createStackNavigator({
      DeckScreen: {
        screen: DeckScreen,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <HeaderBackButton
              onPress={() => navigation.navigate("DeckListScreen")}
            />
          )
        })
      }
    }),
    NewQuestion: createStackNavigator({
      NewQuestionScreen
    })
  })
);
