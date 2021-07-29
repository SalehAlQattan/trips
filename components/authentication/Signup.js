import React, { useState } from 'react';

import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from './styles';

// mobx
import { observer } from 'mobx-react';

// stores
import authStore from '../../stores/authStore';

const Signup = ({ navigation }) => {
  // state
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => authStore.signup(user, navigation);

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        placeholder="Enter username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Enter password"
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Signup</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate('Signin')}>
        Tap Here To Signin
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);
