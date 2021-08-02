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
  light: "#3a4471",
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
