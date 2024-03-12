import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import BottomTabNavigation from "./BottonTabNavigation";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();
const FeedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Home" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default FeedNavigation;
