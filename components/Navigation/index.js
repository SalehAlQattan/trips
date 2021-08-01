//library imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//components
import Home from "../home/Home";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import TripList from "../trips/TripList";
import AddList from "../trips/Add/AddList";
import TripDetail from "../trips/TripDetail";
import profileDetail from "../profile/profileDetail";


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
      <Stack.Screen
        name="AddList"
        component={AddList}
        options={{
          headerStyle: {
            backgroundColor: "#DE4B43",
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen name="Detail" component={TripDetail} />
      <Stack.Screen name="Profile" component={profileDetail} />
    </Stack.Navigator>
  );
};
