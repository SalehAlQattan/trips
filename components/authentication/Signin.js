//library imports
import React, { useState } from "react";
import { View, Button } from "native-base";
import { Text } from "react-native";
import { observer } from "mobx-react";
//stores
import authStore from "../../stores/authStore";
//styles
import { AuthTextInput } from "./styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleConfirm = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };
  return (
    <View>
      <Text>Signin</Text>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(event) => setUser({ ...user, username: event })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button onPress={handleConfirm}>Confirm</Button>
      <Text onPress={() => navigation.navigate("Signup")}>signup?</Text>
    </View>
  );
};

export default observer(Signin);
