import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";

const Home = ({ navigation }) => {
  const handleTest = () => {
    console.log("Test");
  };
  return (
    <>
      <Button onPress={handleTest}>test</Button>
      <Text onPress={() => navigation.navigate("Signin")}>Signin</Text>
    </>
  );
};

export default Home;
