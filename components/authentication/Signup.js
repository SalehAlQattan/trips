//library imports
import React, { useState } from "react";
import { observer } from "mobx-react";
// stores
import authStore from "../../stores/authStore";
//styles
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => authStore.signup(user, navigation);

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        placeholder="Enter username"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Enter password"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Tap Here To Sign in
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);
