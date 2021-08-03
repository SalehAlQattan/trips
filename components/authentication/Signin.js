//library imports
import React, { useState } from "react";
import { observer } from "mobx-react";
import { configure } from "mobx";
//stores
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

//to fix warning for mobx observer!
configure({
  enforceActions: "never",
});

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => authStore.signin(user, navigation);

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        placeholder="username"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        placeholderTextColor="#949499"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signup")}>
        Tap here to Sign up
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
