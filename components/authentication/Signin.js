//library imports
import React, { useState } from 'react';
import { View, Button } from 'native-base';
import { Text } from 'react-native';
import { observer } from 'mobx-react';
//stores
import authStore from '../../stores/authStore';
//styles
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from './styles';

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace('Home');
  };
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
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
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Signin</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate('Signup')}>
        signup
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
