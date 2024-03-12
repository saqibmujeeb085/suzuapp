import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import InspectionBoard from "../screens/inspectionBoard/InspectionBoard";

const Stack = createStackNavigator();
const InspectionBoardNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InspectionBoard" component={InspectionBoard} />
    </Stack.Navigator>
  );
};

export default InspectionBoardNavigation;
