import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Component */
import Home from "../Home";
import Signin from "../authentication/Signin";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
