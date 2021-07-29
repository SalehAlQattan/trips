import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* Component */
import Home from '../Home';

import Signup from '../authentication/Signup';

import Signin from '../authentication/Signin';

import TripList from '../trips/TripList';

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
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Explore" component={TripList} />
    </Stack.Navigator>
  );
};
