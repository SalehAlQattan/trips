import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Component */
import Home from "../Home";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
