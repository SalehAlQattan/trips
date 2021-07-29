import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* Component */
import Home from '../Home';

import Signup from '../authentication/Signup';

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
