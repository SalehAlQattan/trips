import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "native-base";

const Home = ({ navigation }) => {
  const handleTest = () => {
    console.log("Test");
  };
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate("Signin")}>Signin</Button>
      <Button onPress={() => navigation.navigate("Signup")}>Signup</Button>
      <Button onPress={() => navigation.navigate("Explore")}>Guest</Button>
    </SafeAreaView>
  );
};

export default Home;
