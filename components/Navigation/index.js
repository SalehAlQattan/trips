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
import ProfileList from "../profile/ProfileList";
import UpdateTrip from "../trips/update/UpdateTrip";
import UserProfile from "../profile/myProfile/UserProfile";
import UpdateUser from "../profile/myProfile/update/UpdateUser";
import UpdateProfileButton from "../profile/myProfile/update/UpdateProfileButton";

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
      <Stack.Screen
        name="Explore"
        component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#2F375B",
          },
          headerTintColor: "white",
          headerRight: () => <UserProfile />,
        }}
      />
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
      <Stack.Screen
        name="UpdateTrip"
        component={UpdateTrip}
        options={{
          headerStyle: {
            backgroundColor: "#DE4B43",
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={TripDetail}
        options={{
          headerStyle: {
            backgroundColor: "#3a4471",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileList}
        options={{
          headerStyle: {
            backgroundColor: "#3a4471",
          },
          headerTintColor: "white",
          headerRight: () => <UpdateProfileButton />,
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={UpdateUser}
        options={{
          headerStyle: {
            backgroundColor: "#505e9c",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};
