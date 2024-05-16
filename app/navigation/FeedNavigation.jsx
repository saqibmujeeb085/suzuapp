import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import BottomTabNavigation from "./BottonTabNavigation";
import AuthNavigator from "./AuthNavigator";
import InspectionBoardNavigation from "./InspectionBoardNavigation";
import { AuthContext } from "../context/authContext";

const Stack = createStackNavigator();
const FeedNavigation = () => {
  const [user] = useContext(AuthContext);

  const authenticatedUser = user?.token;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "card" }}
    >
      {authenticatedUser ? (
        <>
          <Stack.Screen name="Home" component={BottomTabNavigation} />
          <Stack.Screen
            name="Inspection"
            component={InspectionBoardNavigation}
          />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default FeedNavigation;
