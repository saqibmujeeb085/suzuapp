import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import BottomTabNavigation from "./BottonTabNavigation";
import AuthNavigator from "./AuthNavigator";
import InspectionBoardNavigation from "./InspectionBoardNavigation";
import { AuthContext } from "../context/authContext";
import SingleCarInfo from "../screens/singleCarInfo/SingleCarInfo";

const Stack = createStackNavigator();
const FeedNavigation = () => {
  const [userData] = useContext(AuthContext);

  const authenticatedUser = userData?.token;

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
          <Stack.Screen name="SingleCar" component={SingleCarInfo} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default FeedNavigation;
