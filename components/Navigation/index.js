import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Component */
import Home from "../Home";
import TripList from "../trips/TripList";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Explore" component={TripList} />
    </Stack.Navigator>
  );
};
