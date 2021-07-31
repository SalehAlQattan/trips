//library imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//components
import Home from "../home/Home";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import TripList from "../trips/TripList";
import TripDetail from "../trips/TripDetail";

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
          headerStyle: {
            backgroundColor: "#DE4B43",
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: {
            backgroundColor: "#DE4B43",
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen name="Explore" component={TripList} />
      <Stack.Screen name="Detail" component={TripDetail} />
    </Stack.Navigator>
  );
};
