import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SingleCarInfo from "../screens/singleCarInfo/SingleCarInfo";

const Stack = createStackNavigator();
const SigngleCarPages = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SingleCar" component={SingleCarInfo} />
    </Stack.Navigator>
  );
};

export default SigngleCarPages;
