import React from "react";
import { Button } from "native-base";

const Home = () => {
  const handleTest = () => {
    console.log("Test");
  };
  return (
    <>
      <Button onPress={handleTest}>test</Button>
    </>
  );
};

export default Home;
