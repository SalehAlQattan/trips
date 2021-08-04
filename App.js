//library imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";
//components
import RootNavigator from "./components/Navigation/index";

const theme = {
  white: "white",
  backgroundColor: "#2F375B",
  yellow: "#FEC240",
  red: "#DE4B43",
  lightBlue: "#98C4D1",
  random: "#505e9c",
  light: "#3a4471",
  superLight: "#434f83",
  fade: "#949499",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
